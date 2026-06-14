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

app.listen(3000, () => {
    console.log('ポート3000で待ち受け中...');
})
