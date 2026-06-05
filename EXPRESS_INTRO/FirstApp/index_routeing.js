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

//Expressのルーティングは記載順に判定するので全てマッチする*は最後に書くようにする
app.get(/(.*)/, (req, res) => {
  res.send('そんなパスしらんがな');
})



// listen() expressがリクエストを受け付ける状態になる
app.listen(3000, () => {
  console.log("リクエストをポート3000で待受中....");
});

