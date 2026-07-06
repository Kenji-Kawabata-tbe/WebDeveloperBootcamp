// seedは初期データという意味で使われる
// seedを投入するとかっていう使い方をする

// node側
// node seeds.js
// mongo側
// mongosh
// show dbs
// use farmStand
// db.products.find()

const mongoose = require('mongoose');
const Product = require('./models/product');

// このファイルはexpressとは関係ないので別途mongooseの設定が必要
mongoose.connect("mongodb://localhost:27017/farmStand", {})
  .then(() => {
    console.log("MongoDB コネクションOK！！");
  })
  .catch((err) => {
    console.log("MongoDB コネクションエラー！！！");
    console.log(err);
  });

// 一個一個はしんどいので一気に実行
//const p = new Product({
//    name: 'ルビーグレープフルーツ',
//    price: 198,
//    category: '果物'
//});
//p.save().then(p => {
//    console.log(p);
//}).catch(e => {
//    console.log(e);
//})

const seedProducts = [
    {
        name: 'ナス',
        price: 98,
        category: '野菜'
    },
    {
        name: 'カットメロン',
        price: 480,
        category: '果物'
    },
    {
        name: '種無しスイカのカット',
        price: 380,
        category: '果物'
    },
    {
        name: 'オーガニックセロリ',
        price: 198,
        category: '野菜'
    },
    {
        name: 'コーヒー牛乳',
        price: 298,
        category: '乳製品'
    },
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    }).catch(e => {
        console.log(e);
    });
