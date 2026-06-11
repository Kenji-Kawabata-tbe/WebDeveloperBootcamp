const express = require('express');
const app = express();

//EJSをインストール(npm i ejs)していればrequireする必要はなくそのまま使える
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send('hi');
    //EJSテンプレートを返す。
    //EJSのテンプレートはデフォルトでviewsディレクトリに配置するので
    //この書き方でview/home.ejsを見るようになる
    res.render('home');

});

app.listen(3000, () => {
    console.log('ポート3000で待つ受け中...');
})
