//コメントの配列とコメントのviewが共にcommentsという名前なので混同しないよう注意

const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
// 分割代入の時に変数の名前を変えたい場合、:の後ろに新しい変数名を指定することでその変数名で使えるようになる
const { v4: uuid } = require('uuid');
uuid();


//フォームから渡ってきたデータをパースする
//ポストで送られてくるデータには種類(フォーマット)がある。
//受け取る側もそれを変換(パース)するかという事を意識しないといけない
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//method-overrideパッケージでフォームでもGETとPOST以外のメソッドも利用できるようにする
//_method=DELETEみたいな感じでクエリーストリングでメソッドを利用できるようにする
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        //id: 1,
        id: uuid(),
        username:'yanada',
        comment: 'おもしろすぎ'
    },
    {
        //id: 2,
        id: uuid(),
        username:'suzuki',
        comment: '趣味はバードウォッチング'
    },
    {
        //id: 3,
        id: uuid(),
        username:'tanaka',
        comment: 'yamadaさん、何がおもしろいんですか'
    },
    {
        //id: 4,
        id: uuid(),
        username:'wanwan',
        comment: 'わんわんわん'
    }
];

app.get('/comments', (req, res) => {
    // { comments }は{ comments: comments }の省略系
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

//POSTリクエスト commentsに入力した内容を追加する
app.post('/comments', (req, res) => {
    // app.use(express.urlencoded({ extended: true }));
    // があるからリクエストの内容を出力できる
    console.log(req.body);
    const { username, comment } = req.body;
    //comments.push({ username, comment });
    // pushの際にidを付与
    comments.push({ username, comment, id: uuid() });
    //これだとページが戻らない。再読み込みで二重登録できてしまう。
    //res.send('オッケー!!!');
    // /commentsにリダイレクト302で戻す
    res.redirect('/comments');
})

//コメントのIDを返す
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    //コメントの中でidがparamsのidと一致するものを探す
    //idを直接定義している場合、idがstringで定義されているのでintにperseする
    //const comment = comments.find(c => c.id === parseInt(id));
    //idをuuidで定義している場合はそのまま使える
    const comment = comments.find(c => c.id === id);

    //commentに入っている値を一緒にわたす
    res.render('comments/show', { comment });
});

//コメントの更新フォーム
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});


//コメントの更新
//http://localhost:3000/comments/xxxx-xxxxx-xxxx-xxx-xxxx key:comment value:hogehogehoge
app.patch('/comments/:id', (req, res) => {
    //res.send('PATCH!!!');
    const { id } = req.params;
    // PATCHリクエストのbodyのcommentの値を取得
    //   新しいコメント key:comment value:XXXX
    const newCommentText = req.body.comment;
    // 指定されたidのコメントを見つける
    const foundComment = comments.find(c => c.id === id);
    // 見つけたidのコメントを新しいコメントで更新
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});


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
