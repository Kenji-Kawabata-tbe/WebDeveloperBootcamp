const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('コネクションOK！！');
    })
    .catch(err => {
        console.log('コネクションエラー！！！');
        console.log(err);
    })

// 以降はthenの結果を待たずに実行しているけど、mongooseは起動直後に即座に使えると
// ドキュメントに書いてあるのでその通りにしている


//スキーマの定義。RDBでいうテーブルに近い？
//Mongdbにはスキーマの概念はないので。mongooseにある概念。
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//クラスの作成
//第一引数のMovieが重要。
//この名前の先頭を小文字にして複数形にしたものがmongooseのコレクションとなる
//この場合,Movieとしているのでコレクション名はmoviesとなる
const Movie = mongoose.model('Movie', movieSchema);

//インスタンスの作成
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

// インスタンスをDBに入れる
// node
// .load index.js
// amadeus
// これだけではまだDBには何も入っていない。
// amadeus.save() ここまでやってmongodbにデータが保存される
//
// mongosh
// use movieApp
// db.movies.find()
//
// 更新
// amadeus.score = 9.5
// amadeus.save()
// db.movies.find()

// 複数のデータを追加
// mongoへのインサートまで実行されるので、時間がかかる。その場合は非同期にするのが一般的
// node index.js
// mongosh
// use movieApp
// db.movies.find()
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
]).then(data => {
    console.log('成功!!!');
    console.log(data);
})


// Mongooseでの検索
// node
// .load index.js
// Movie.find({}).then(data => console.log(data))
// Movie.find({rating: 'PG-13'}).then(data => console.log(data))
// Movie.find({year: { $gte: 2010 }}).then(data => console.log(data))
// Movie.find({year: { $lt: 1990 }}).then(data => console.log(data))
// Movie.findOne({}).then(m => console.log(m))
// Movie.findById('6a3f33816a11cdfdb6bdcea4').then(m => console.log(m))


// Mongooseでデータの更新
// node
// .load index.js
//Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res))
//db.movies.find({title: { $in: ['Amadeus', 'Stand By Me'] }})
//Movie.updateMany({title: { $in: ['Amadeus', 'Stand By Me'] }}, {score: 10}).then(res => console.log(res))
//db.movies.find({title: { $in: ['Amadeus', 'Stand By Me'] }})
//// findOneAndUpdateだとコンソールに対象のオブジェクトを表示する。ただしデフォルトは更新前の情報。
//Movie.findOneAndUpdate({title: 'The Iron Gian'}, {title: 'The Iron Giant'}).then(m => console.log(m))
//Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.8}, {new: true}).then(m => console.log(m))

// Mongooseでデータの削除
//Movie.deleteOne({title: 'Amelie'}).then(msg => console.log(msg))
//Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))
//Movie.findOneAndDelete({title: 'Alien'}).then(m => console.log(m))
