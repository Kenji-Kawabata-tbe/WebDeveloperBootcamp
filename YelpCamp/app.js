// 本番モードじゃない時
// error.ejsでも同様に本番モードの時だけエラーになるように
// 本番モードで試したかったら NODE_ENV=production node app.js で起動
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');

//const joi = require('joi');
const ExpressError = require('./utils/ExpressError')
const methodOverride = require("method-override");
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');
// helmet セキュリティに関連したhttpヘッダーを設定してくれるミドルウェア
const helmet = require('helmet');

// routeの読み込み
const userRoutes = require('./routes/users');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
//const cookie = require('express-session/session/cookie');

// SQLインジェクション対策用のミドルウェア
const mongoSanitize = require('express-mongo-sanitize');

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

//!!SQLインジェクション対策のモジュール。
// ただしexpress4系互換っぽいので有効化するとこのアプリではエラーになる
//app.use(mongoSanitize());


//セッション関連の設定
const sessionConfig = {
  name: 'fehuaofey',
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // javascriptからクッキーの値を見れないようにする。セキュリティ面で重要。
    // デフォルトでもtrueだが分かりやすく明示的に設定している
    httpOnly: true,
    // httpsだけ許可する設定。
    // ただ、このアプリだと動かないのでコメントアウトしている
    //secure: true,
    // セッションの有効期限
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
};
app.use(session(sessionConfig));

//passport関連の初期化設定
app.use(passport.initialize());
app.use(passport.session());
  //localStrategyというログイン方法を使う
passport.use(new localStrategy(User.authenticate()));
  //ユーザの情報をどうやって入れたり取り出したりするか
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//フラッシュ関連の設定
//フラッシュのミドルウェアを作ってどこからでも呼び出せるようにする
app.use(flash());

//これでhelmetの15個あるうちの11個が有効化される。v4の場合。
app.use(helmet());
//ミドルウェア毎に有効、無効を切り替えられる
const scriptSrcUrls = [
    'https://api.mapbox.com',
    'https://cdn.jsdelivr.net'
];
const styleSrcUrls = [
    'https://api.mapbox.com',
    'https://cdn.jsdelivr.net'
];
const connectSrcUrls = [
    'https://api.mapbox.com',
    'https://*.tiles.mapbox.com',
    'https://events.mapbox.com'
];
const fontSrcUrls = [];
const imgSrcUrls = [
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`,
    'https://images.unsplash.com'
];

//CSP(ContentSecurityPoicy)はXSSを防ぐのを助けてくれる仕組みの一つ。
//画像はunsplashとかcloudinaryからしか取得しない、javascriptは特定のcdnからのものしか許可しない、フォントはgoogleフォントしか許可しないなど
//いろんなコンテンツをどこから取得するのを許可するかということを制御できる。英語の名前そのまま
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: [],
        connectSrc: ["'self'", ...connectSrcUrls],
        scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
        styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
        workerSrc: ["'self'", "blob:"],
        childSrc: ["blob:"],
        objectSrc: [],
        imgSrc: ["'self'", 'blob:', 'data:', ...imgSrcUrls],
        fontSrc: ["'self'", ...fontSrcUrls]
    }
}));



app.use((req, res, next) => {
  // sqlインジェクションの確認用。何もしないと
  // http://localhost:3000/campgrounds?&gt=sasadasaで{ gt: 'sasadasa' }が取れてしまう
  console.log(req.query);
  //res.localsであるリクエストのライフサイクル内(一回のリクエスト内)で使える変数を一時的に保存できる
  //保存した値はテンプレートから自動的に使えるようになるのでどのテンプレートからでもsuccessを使えるようになる
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
    res.render('home');
});

// passportでユーザ登録
// 指定したメールアドレス、ユーザかつパスワードがmogegeをハッシュ化したもので作られる
// ちなみにPassportのハッシュ化関数はpbkdf2というものを使っている
app.get('/fakeUser', async (req, res) => {
  const user = new User({ email: 'hogegege@example.com', username: 'hogegege' });
  const newUser = await User.register(user, 'mogege');
  res.send(newUser);
});

// routeの読み込み
app.use('/', userRoutes);
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

