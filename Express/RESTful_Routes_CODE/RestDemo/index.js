const express = require('express');
const app = express();

//GETリクエストを送る
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

//POST リクエストを送る
app.post('/tacos', (req, res) => {
    res.send('POST /tacos response');
});

app.listen(3000, () => {
    console.log('ポート3000で待ち受け中...');
})
