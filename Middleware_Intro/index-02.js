const express = require('express');
const app = express();
// ログ出力のミドルウェ
// ちなみにmorganはデフォルトだとレスポンスが投げられるタイミングでログを出すのでnextがあっても最後に出力される
const morgan = require('morgan');

// app.useは全てのリクエストで実行される処理。
// ミドルウェアを使う場合はapp.useで対象のミドルウェアを指定する
//app.use(morgan('tiny'));
//app.use(morgan('dev'));
app.use(morgan('common'));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = (req.query);
    if (password === 'supersecret') {
        return next();
    }
    res.send('パスワードが必要です');
})

//app.use((req, res, next) => {
//    const { password } = (req.query);
//    if (password === 'supersecret') {
//        return next();
//    }
//    res.send('パスワードが必要です');
//})

app.get('/dogs', (req, res, next) => {
    console.log('いぬーーー！！');
    next();
});



// immediateでミドルウェアが実行された直後にログを出力 他のmorganを有効にしてログ2回出力とかもできっぽい
//app.use(morgan('common', { immediate: true }));

//app.use((req, res, next) => {
//    console.log('はじめてのミドルウェア');
//    // 次のミドルウェアが続いて実行される
//    // nextはnextという名前じゃなくてもいいが慣習でnextが使われる事が多い
//    // return next();
//    next();
//    // こうすると全てのnextが終わった後にこの処理が実行される
//    // return next();にするとnextの後ろに書いてある処理は実行されない
//    console.log('初めてのミドルウェアのnextの後')
//});
//app.use((req, res, next) => {
//    console.log('2個目のミドルウェア');
//    // 次のミドルウェアが無ければリクエストのパスに依存した処理が実行される。/とか/dogsとか。
//    next();
//});


app.get('/', (req, res) => {
    console.log(`リクエスト時刻: ${req.requestTime}`);
    res.send('ホームページ！！');
});

app.get('/dogs', (req, res) => {
    console.log(`リクエスト時刻: ${req.requestTime}`);
    res.send('わんわん');
});

//指定したリクエストのPathに対して特定のミドルウェアを設定することができる
//この場合、/secretにverifyPasswordを設定している
//verifyPasswordのnext()には
//(req, res) => {
//    res.send('ここは秘密のページです！！誰にも言わないで！！');
//}
//が入るようになる
app.get('/secret', verifyPassword, (req, res) => {
    res.send('ここは秘密のページです！！誰にも言わないで！！');
});

app.use((req, res) => {
    res.status(404).send('ページが見つかりません');
})

app.listen(3000, () => {
    console.log('locahost:3000で待受中...');
});
