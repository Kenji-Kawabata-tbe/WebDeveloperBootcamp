const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('ホームページ！！！');
})

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    //res.send(req.body);
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    //res.send(hash)
    const user = new User({
        username,
        password: hash
    });
    await user.save();
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    //認証
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        res.send('ようこそ！！！');
    } else {
        res.send('失敗！もう一回試してみてください');
    }
});

app.get('/secret', (req, res) => {
    res.send('ここはログイン済みの場合だけ見れる秘密のページ');
});

app.listen(3000, () => {
    console.log('ポート3000で待ち受け中...');
});
