const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
//const joi = require('joi');
const ExpressError = require('./utils/ExpressError')
const methodOverride = require("method-override");
// routeの読み込み
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');

mongoose
  .connect("mongodb://localhost:27017/yelp-camp",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
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
//静的ファイルの読み込み
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

// routeの読み込み
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);



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

