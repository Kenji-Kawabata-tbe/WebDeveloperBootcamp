const express = require('express');
const app = express();
const path = require('path');


//フォームから渡ってきたデータをパースする
//ポストで送られてくるデータには種類(フォーマット)がある。
//受け取る側もそれを変換(パース)するかという事を意識しないといけない
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username:'yanada',
        comment: 'おもしろすぎ'
    },
    {
        username:'suzuki',
        comment: '趣味はバードウォッチング'
    },
    {
        username:'tanaka',
        comment: 'yamadaさん、何がおもしろいんですか'
    },
    {
        username:'wanwan',
        comment: 'わんわんわん'
    }
];

app.get('/comments', (req, res) => {
    // { comments }は{ comments: comments }の省略系
    res.render('comments/index', { comments });
})


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


// GET /comments - コメント一覧を取得
// POST /comments - 新しいコメントを作成
// GET /comments/:id - 特定のコメントを一つ取得
// PATCH comments/:id - 特定のコメントを更新
// DELETE comments/:id - 特定のコメントを削除
