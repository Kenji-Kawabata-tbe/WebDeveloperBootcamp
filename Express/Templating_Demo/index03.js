const express = require('express');
const app = express();
const path = require('path');


//EJSをインストール(npm i ejs)していればrequireする必要はなくそのまま使える
//app.set('view engine', 'ejs');

//path.joinでこのメソッドに渡された文字列を組み合わせて一つのpathを作り上げる。3つ以上渡すこともできる。
//__dirname はNode.jsの特別な変数で今実行しているファイルが存在しているディレクトリへの絶対パスを返す
//この場合、indexXX.jsの絶対パス。その後ろにviewsがpathに追加される。
//これが無いとindexXX.jsがあるディレクトリでnodeを起動しないとviewが辿れなくてエラーになる
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send('hi');
    //EJSテンプレートを返す。
    //EJSのテンプレートはデフォルトでviewsディレクトリに配置するので
    //この書き方でview/home.ejsを見るようになる
    res.render('home');
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    //テンプレートにrandをパラメーターとして渡す
    //res.render('random', { rand: num});
    //こうするとキーと値を両方ともnumと設定したことになる
    //変更する場合はテンプレートの値変えるのも忘れずに
    res.render('random', { num });
});

app.get('/cats', (req, res) => {　
    const cats = [
        'タマ', 'トラ', 'クロ', 'モモ', 'ジジ'
    ];
    res.render('cats', { cats });
});

// /r/subredditのsubredditの部分がreq.paramsに入る。
app.get('/r/:subreddit', (req, res) => {
    // req.paramsの値をsuvredditという変数に格納
    const { subreddit } = req.params;
    // suvredditというテンプレートにsubreddit変数の値をキー/バリューで渡す
    res.render('subreddit', { subreddit });
});

app.listen(3000, () => {
    console.log('ポート3000で待つ受け中...');
})
