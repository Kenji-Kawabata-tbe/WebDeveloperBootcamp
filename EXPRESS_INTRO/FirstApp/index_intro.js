const express = require("express");
const app = express();
//console.dir(app);

// use() expressにリクエストがある度に必ずコールバック関数が呼ばれる
//app.use(() => {
//    console.log('リクエストを受け付けました!!');
//});

//サーバに入っている来るリクエストのオブジェクト(req)とサーバーから出ていくレスポンスのオブジェクト(res)
//を必ず使うことができる。reqとresという名前じゃなくてもいい。
//HTTPのオブジェクトはJavaScriptのオブジェクトではなくただのテキスト情報だが、ExpressはパースしてJavaScriptのオブジェクトにしてくれる
app.use((req, res) => {
  console.log("リクエストを受け付けました!!");
  //console.dir(req);
  // これはContent-Typeがtext/htmlになる
  //res.send('リクエストを受けたのでレスポンスを返します!!');
  // オブジェクトを返すようにするとContent-Typeがapplication/jsonになり、bodyもJSONになる
  //res.send({ color: 'red'})
  // htmlを返すようにするとContent-Typeがtext/htmlになり、bodyもHTMLになる(ブラウザから見るとタグがh1タグとして機能する)
  res.send("<h1>はじめてのWebページ</h1>");
});

// listen() expressがリクエストを受け付ける状態になる
app.listen(3000, () => {
  console.log("リクエストをポート3000で待受中....");
});
