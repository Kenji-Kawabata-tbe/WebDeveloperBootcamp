// 実行
// node product.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('コネクションOK！！');
    })
    .catch(err => {
        console.log('コネクションエラー！！！');
        console.log(err);
    });

// スキーマの定義をオブジェクトでより細かく。
const productScheam = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true

    }
});

const Product = mongoose.model('Product', productScheam);

const bike = new Product({
    name: 'マウンテンバイク',
    price: 59800,
    //price: '59800' numberぽく見えるものならtype:Numberでも入る
    color: 'red' //スキーマに定義されていないプロパティを入れてもエラーにならないが作成されない
})

bike.save()
    .then(data => {
        console.log('成功!!!');
        console.log(data);
    })
    .catch(err => {
        console.log('エラー!!!');
        console.log(err.errors.name.properties.message);
    })
