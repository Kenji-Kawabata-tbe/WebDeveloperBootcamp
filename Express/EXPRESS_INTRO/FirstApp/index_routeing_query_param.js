const express = require("express");
const app = express();

// /cats => 'にゃー'
app.get('/cats', (req, res) => {
  console.log('/catsにリクエストがきました');
  res.send('にゃー');
})

app.post('/cats', (req, res) => {
  res.send('/catsにPOSTリクエストがきました!');
})

// /dogs => 'わんわん'
app.get('/dogs', (req, res) => {
  console.log('/dogsにリクエストがきました');
  res.send('わんわん');
})

app.get('/', (req, res) => {
  res.send('ここはホームページ');
})

// /r/配下のリクエストは全部このルーティングが適用される。:subredditの名前は何でもいい。
// /r/～/は対象外。/r/の直下だけ。
//app.get('/r/:subreddit', (req, res) => {
//  res.send('subredditページ');
//})

// req.paramsでreqのパラメータを使用してpathの取得ができる。
app.get('/r/:subreddit', (req, res) => {
  console.log(req.params);
  //req.paramsからsubredditを分割代入
  const { subreddit } = req.params;
  // subredditの中にpathの値が入るのでそれを取ってきてレスポンスの中でその値を使う
  res.send(`<h1>${subreddit} subredditのページ</h1>`);
})

// パラメータをつなぐ事もできる
// http://localhost:3000/r/hoge/moge
// [Object: null prototype] { test: 'hoge', postId: 'moge' }
app.get('/r/:test/:postId', (req, res) => {
  console.log(req.params);
  const { test, postId } = req.params;
  res.send(`<h1>${test} Post ID: ${postId}のページ</h1>`);
})

// req.queryでクエリーパラメータの取得ができる
// http://localhost:3000/search?q=dogs&color=red
// [Object: null prototype] { q: 'dogs', color: 'red' }
//app.get('/search', (req, res) => {
//  console.log(req.query);
//  res.send('hi!!');
//});

// http://localhost:3000/search?q=dogs
app.get('/search', (req, res) => {
  console.log(req.query);
  const { q } = req.query
  if (!q) {
    res.send('検索するものが設定されていません');
  } else {
    res.send(`<h1>「${q}」の検索結果 </h1>`);
  }
});







//Expressのルーティングは記載順に判定するので全てマッチする*は最後に書くようにする
app.get(/(.*)/, (req, res) => {
  res.send('そんなパスしらんがな');
})



// listen() expressがリクエストを受け付ける状態になる
app.listen(3000, () => {
  console.log("リクエストをポート3000で待受中....");
});

