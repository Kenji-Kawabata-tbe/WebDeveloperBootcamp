const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require("method-override");
const Campground = require('./models/campground');

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
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
});

//順番大事。:idより後ろに設定するとnewをidと勘違いしちゃう。
app.get('/campgrounds/new', async(req, res) => {
    res.render('campgrounds/new');
});

app.get('/campgrounds/:id', async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show', { campground });
});

//app.post('/campgrounds', async (req, res) => {
//  //res.send(req.body);
//  const campground = new Campground(req.body.campground);
//  await campground.save();
//  res.redirect(`/campgrounds/${campground._id}`);
//})

//エラーハンドリング追加
//asyncの関数のエラーはtry-catchで拾ってnextで返す
//nextではエラーハンドリングが呼ばれるので自分で定義したエラーハンドルが呼ばれる
app.post('/campgrounds', async (req, res, next) => {
  try {
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  } catch (e) {
    next(e);
  }
});


//app.get('/makecampground', async (req, res) => {
//    const camp = new Campground({ title: '私の庭', description: '気軽に安くキャンプ！！' });
//    await camp.save();
//    res.send(camp);
//});

app.get('/campgrounds/:id/edit', async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', { campground });
});

app.put('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    res.redirect(`/campgrounds/${campground._id}`);
});

app.delete('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
});

app.use((err, req, res, next) => {
    res.send('問題が置きました');
});

app.listen(3000, () => {
    console.log('ポート3000でリクエスト受付中...');
});

