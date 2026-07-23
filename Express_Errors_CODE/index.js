const express = require('express');
const app = express();
// ログ出力のミドルウェア
// ちなみにmorganはデフォルトだとレスポンスが投げられるタイミングでログを出すのでnextがあっても最後に出力される
const morgan = require('morgan');

const AppError = require('./AppError');

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
    //res.send('パスワードが必要です');
    //これでエラーのステータスを指定できるけど、毎回書くのしんどいし書き忘れのリスクもある
    //res.status(401);
    //独自エラークラスを使う方がベター
    //errにAppErrorが入る
    throw new AppError('パスワードが必要です', 401);
})


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

//わざとエラー
//特にエラー処理をしない場合、Expressデフォルトのエラー処理用ミドルウェアでエラーハンドリングを行う
app.get('/error', (req, res) => {
    hoge.moge();
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

app.get('/admin', (req, res) => {
    throw new AppError('管理者しかアクセスできません！', 403);
});

app.use((req, res) => {
    res.status(404).send('ページが見つかりません');
})

//app.use((err, req, res, next) => {
//    console.log('*******************');
//    console.log('*********エラー**********');
//    console.log('*******************');
//    //独自のエラーを返す
//    //res.status(500).send('エラーが発生しました!!!');
//
//    //エラーの場合にnextの引数で何も渡さないと次のミドルウェアが呼ばれる
//    //逆に何かを渡すとエラーハンドリング用のミドルウェアが実行されるようになる
//    //この場合のerrにはExpressデフォルトのエラー処理用ミドルウェアの処理結果が入っている
//    console.log(err);
//    next(err);
//})

app.use((err, req, res, next) => {
    //errにAppErrorが渡された時のエラーハンドリング。res.statusでAppErroで取得したパラメーターを使う

    // errから分割代入でstatuだけを取得
    // ただこれだと/errorの場合にstatusが無いので想定とは違うエラーになる
    // (app.useなので全ての場合に一致してしまうので/errorの場合でもstatusが必要になるがExpressが生成した標準のエラーオブジェクトにはstatusが入っていない)
    //const { status } = err;
    //res.status(status).send('エラー！！！');

    // errから分割代入でstatusとmessageを取得。デフォルト値も=で指定しているので、errにstatusはmessageが入っていないオブジェクトでも対応可能
    const { status =500, message = '何かエラーが起きました' } = err;
    res.status(status).send(message);

})
app.listen(3000, () => {
    console.log('locahost:3000で待受中...');
});
