const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo',
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
     .then(() => {
        console.log('コネクションOK！！');
    })
    .catch(err => {
        console.log('コネクションエラー！！！');
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

// ログインチェックのミドルウェア
const requireLogin = (req, res, next) => {
    //セッションにユーザIDが無ければログインページにリダイレクト
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.use(express.urlencoded({extended: true}));
app.use(session({ secret: 'mysecret'}));

app.get('/', (req, res) => {
    res.send('ホームページ！！！');
})

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    //res.send(req.body);
    const { username, password } = req.body;
    //const hash = await bcrypt.hash(password, 12);
    //res.send(hash)
    const user = new User({
        username,
        //password: hash
        password
    });
    await user.save();
    //ログイン状態を保持するためにセッションにユーザIDを保存
    req.session.user_id = user._id;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    //認証 モデル側でパスワードとハッシュ値の比較を行う
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        //ログイン状態を保持するためにセッションにユーザIDを保存
        req.session.user_id = foundUser._id;
        //res.send('ようこそ！！！');
        res.redirect('/secret');
    } else {
        //res.send('失敗！もう一回試してみてください');
        res.redirect('/login');
    }
    //const user = await User.findOne({ username });
    ////認証
    //const validPassword = await bcrypt.compare(password, user.password);
    //if (validPassword) {
    //    //ログイン状態を保持するためにセッションにユーザIDを保存
    //    req.session.user_id = user._id;
    //    //res.send('ようこそ！！！');
    //    res.redirect('/secret');
    //} else {
    //    //res.send('失敗！もう一回試してみてください');
    //    res.redirect('/login');
    //}
});

app.post('/logout', (req, res) => {
    //セッションで持ってるユーザIDを空にすることでログアウトした状態にする
    //req.session.user_id = null;
    //ユーザIDだけじゃなくてもっと複数の情報をセッションに入れていてそれをまとめて消したい場合はsession.destroyメソッドが便利
    req.session.destroy();
    res.redirect('/login');
});

app.get('/secret', requireLogin, (req, res) => {
    //res.send('ここはログイン済みの場合だけ見れる秘密のページ');
    res.render('secret');
});

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('TOP SECRET!!!');
});


app.listen(3000, () => {
    console.log('ポート3000で待ち受け中...');
});
