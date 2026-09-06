const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
//const joi = require('joi');
// schemaはこれから増えることを想定して予め分割代入で取得
const { campgroundSchema, reviewSchema } = require('./schemas')
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError')
const methodOverride = require("method-override");
const Campground = require('./models/campground');
const Review = require('./models/review');

mongoose
  .connect("mongodb://localhost:27017/yelp-camp", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("MongoDB コネクションOK！！");
  })
  .catch((err) => {
    console.log("MongoDB コネクションエラー！！！");
    console.log(err);
  });

const app = express();

//エンジンの指定。
//EJSを解釈するときはデフォルトのEJSエンジンを使うのではなくejs-mateを使うようにする
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// joi バリデーション用のミドルウェア
const validateCampground = (req, res, next) => {
    // req.bodyからerrorを分割代入して、campgroundSchemaの設定に沿ってバリデートする
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(detail => detail.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        //何もない時はnextを呼ぶ
        next();
    }
}

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(detail => detail.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', catchAsync(async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

//順番大事。:idより後ろに設定するとnewをidと勘違いしちゃう。
app.get('/campgrounds/new', catchAsync(async(req, res) => {
    res.render('campgrounds/new');
}));

//app.get('/campgrounds/:id', async(req, res) => {
//    const campground = await Campground.findById(req.params.id);
//    res.render('campgrounds/show', { campground });
//});

app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    res.render('campgrounds/show', { campground });
}));

//app.post('/campgrounds', async (req, res) => {
//  //res.send(req.body);
//  const campground = new Campground(req.body.campground);
//  await campground.save();
//  res.redirect(`/campgrounds/${campground._id}`);
//})

//エラーハンドリング追加
//asyncの関数のエラーはtry-catchで拾ってnextで返す
//nextではエラーハンドリングが呼ばれるので自分で定義したエラーハンドルが呼ばれる
////app.post('/campgrounds', async (req, res, next) => {
////  try {
////    const campground = new Campground(req.body.campground);
////    await campground.save();
////    res.redirect(`/campgrounds/${campground._id}`);
////  } catch (e) {
////    next(e);
////  }
////});

//ここにpostが来るとvalidateCampgroundが実行される。その後にcatchAsyncが実行される、という順番
app.post('/campgrounds', validateCampground, catchAsync(async (req, res) => {
    //if (!req.body?.campground) {
    //    throw new ExpressError(
    //        '不正なキャンプ場のデータです',
    //        400
    //    );
    //}
    const campground = new Campground(req.body.campground);
    await campground.save();

    res.redirect(`/campgrounds/${campground._id}`);
}));




//app.get('/makecampground', async (req, res) => {
//    const camp = new Campground({ title: '私の庭', description: '気軽に安くキャンプ！！' });
//    await camp.save();
//    res.send(camp);
//});

app.get('/campgrounds/:id/edit', async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', { campground });
});

app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    res.redirect(`/campgrounds/${campground._id}`);
}));

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}));

//レビュー投稿
app.post('/campgrounds/:id/reviews', validateReview, catchAsync(async (req, res) => {
    // :idのcampgroundSchemaの情報がcampgroundに入る
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    // campgroundのreviews[]にreviewの情報を入れる
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}));

//app.allで全てのメソッドが対象
//*にすることでどんなパスでも、という意味が追加になる
app.all('/{*splat}', (req, res, next) => {
  //res.send('404!!!');
  //nextでエラーの時にどうするかはエラーハンドラーに任せることができる
  //これは
  //const error = new ExpressError('ページが見つかりませんでした', 404);
  //と同じ。それをnext(error)で渡している
  next(new ExpressError('ページが見つかりませんでした', 404));
});

//エラーハンドラー
app.use((err, req, res, next) => {
    //res.send('問題が起きました');
    //errからstatusCodeとmessageを初期値を分割代入。errに上のコードのnext(error)が渡っている
    //const { statusCode = 500, message = '問題が起きました' } = err;
    const { statusCode = 500 } = err;
    if(!err.message) {
        err.message = '問題が起きました'
    }
    //res.status(statusCode).send(message);
    res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
    console.log('ポート3000でリクエスト受付中...');
});

