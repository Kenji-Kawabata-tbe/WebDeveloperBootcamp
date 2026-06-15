const express = require('express');
const app = express();

//フォームから渡ってきたデータをパースする
//ポストで送られてくるデータには種類(フォーマット)がある。
//受け取る側もそれを変換(パース)するかという事を意識しないといけない
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GETリクエストを送る
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

//POST リクエストを送る
app.post('/tacos', (req, res) => {
    //res.send('POST /tacos response');
    //postされたデータの取得
    console.log(req.body);
    const { meat, qty } = req.body;
    res.send(`${qty} ${meat} どうぞ`);
    
});

app.listen(3000, () => {
    console.log('ポート3000で待ち受け中...');
})


