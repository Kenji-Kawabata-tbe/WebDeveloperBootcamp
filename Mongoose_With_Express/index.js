// nodemon index.jsでサーバが立ち上がる

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");

const Product = require('./models/product');

mongoose
.connect("mongodb://localhost:27017/farmStand", {
  })
  .then(() => {
    console.log("MongoDB コネクションOK！！");
  })
  .catch((err) => {
    console.log("MongoDB コネクションエラー！！！");
    console.log(err);
  });


//path.joinでこのメソッドに渡された文字列を組み合わせて一つのpathを作り上げる。3つ以上渡すこともできる。
//__dirname はNode.jsの特別な変数で今実行しているファイルが存在しているディレクトリへの絶対パスを返す
//この場合、indexXX.jsの絶対パス。その後ろにviewsがpathに追加される。
//これが無いとindexXX.jsがあるディレクトリでnodeを起動しないとviewが辿れなくてエラーになる
app.set('views', path.join(__dirname, 'views'));
//EJSをインストール(npm i ejs)していればrequireする必要はなくそのまま使える
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('わんわん');
})

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  //console.log(products);
  //res.send('商品一覧を表示予定');
  //テンプレートを使う
  //res.render('products/index');
  res.render('products/index', { products });
})

// listen() expressがリクエストを受け付ける状態になる
app.listen(3000, () => {
  console.log("リクエストをポート3000で待受中....");
});
