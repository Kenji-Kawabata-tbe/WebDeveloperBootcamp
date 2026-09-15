const express = require('express');
const app = express();
const session = require('express-session');

//express-sessionをapp.useすることで全てのリクエストにsessionが使える。
//reqオブジェクトにreq.sessionというプロパティが用意されるようになる。
//expressのデフォルトではサーバのMemoryStoreというメモリ領域に保存されるが、通常はこの使い方はしない。redisとかmongoが一般的。
//app.use(session({
//    secret: 'mysecret'
//}));

const sessionOptions = {
    secret: 'mysecret',
    // デフォルトの設定だとwarningがでるので。
    resave: false,
    saveUninitialized: false
};
app.use(session(sessionOptions));

//sessionが有効になっているとcookieにconnect.sidが設定される。sidはセッションidという意味。
//セッションIDはcookieに保存されるのでブラウザを変えたりcookieを削除するとまた最初からセッションを作成する
app.get('/viewcount', (req, res) => {
    //res.send('あなたはX回このページを表示しました');
    if(req.session.count) {
        req.session.count += 1;
    } else (
        req.session.count = 1
    )
    res.send(`あなたは${req.session.count}回このページを表示しました`);
});

// usernameというquerystringを受け取ったらそれをセッションに保存する。
// /register?username=ken  デフォルトはAnonymous
app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})
// /registerの値を取得
app.get('/greet', (req, res) => {
    const { username  } = req.session;
    res.send(`ようこそ、${username}さん`);
})


app.listen(3000, () => {
    console.log('ポート3000で受付中...')
});
