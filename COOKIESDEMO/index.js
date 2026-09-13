const express = require('express');
const app = express();
// cookie-parserがRequest.Cookiesにcookieをパースしてくれる
const cookieParser = require('cookie-parser');

// 一度cookieを設定するとそのcookieは明示的に削除したり期限が切れない限り保持し続ける
// なのでcookie-parserをapp.useすると/greetなど他のパスにアクセスした時もリクエストの時にcookieが一緒に送信される
//app.use(cookieParser());

//cookieParserに署名を設定して署名付きクッキーにする
//今はmysecretという値をつけているが、普通はしない。
//また、この値を変えると署名が変わることを意味するのでそれまで送っていたクッキーは全て無効になる
app.use(cookieParser('mysecret'));

app.get('/greet', (req, res) => {
    //console.log(req.cookies);
    //res.send('やっほー');
    // 初期値の設定。/setnameにnameがあるので、そこにアクセスすればその時のtaroが設定される
    const { name = 'anonymous' } = req.cookies;
    res.send(`ようこそ ${name} さん`);
});

app.get('/setname', (req, res) => {
    // レスポンスにcookieを含める
    // サーバーから送られたcookieはブラウザに保存される。
    // 細かく言うと、request objectのCookiesに入る
    // cookieはブラウザに保存される情報なのでブラウザでcookieを削除したら消えるし、ブラウザを変えた場合はcookieの情報は共有されない
    // なので永続させたい情報や大事な情報をcookieだけに保存するという使い方はしないようにする。
    // 主に複数のリクエストの状態を持たせるために使われる。
    // ブラウザがユーザーを特定するような情報を持っておけばリクエストの中のクッキーの情報を見ることでサーバーサイドがユーザーを認識することができる
    // cookieはブラウザの 開発者ツール -> Application -> cookieで確認できる
    res.cookie('name', 'yamadataro');
    res.cookie('animal', 'cat');
    res.send('クッキー送ったよ!!');
});

app.get('/getsignedcookie', (req, res) => {
    // fruitというキーでgrapeという値を持ったクッキーが署名付きでレスポンスにのる
    res.cookie('fruit', 'grape', { signed: true });
    res.send('署名付きクッキーを返したよ!!');
});

app.get('/verifyfruit', (req, res) => {
    //署名付きクッキーはreq.cookiesではなくreq.signedCookieオブジェクトじゃないと使えない
    //クッキーの値を削除するとレスポンスが空になり、値を書き換えたりするとfalseが返ってくる
    //console.log(req.cookies);
    //res.send(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);

});

app.listen(3000, () => {
    console.log('受付中...')
});
