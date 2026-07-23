const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBコネクションOK！！');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー！！！');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['果物', '野菜', '乳製品'];

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get('/products', wrapAsync(async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: '全' });
    }
}));

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

// asyncの関数の場合はtry-catchで拾うのがベター。
// そうすることで自分で作ったエラーでも他のモジュール等が作ったエラーでも全部nextで拾えて独自のエラーハンドラーに渡す事ができる
// このケースだと登録時のエラーはmongooseでエラーが作成される。
app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`);
    } catch (e) {
        next(e);
    }
});

//app.post('/products', wrapAsync(async (req, res) => {
//    const newProduct = new Product(req.body);
//    await newProduct.save();
//    res.redirect(`/products/${newProduct._id}`);
//}));

//async関数の場合、エラーをthrowするだけでは出来なくて、nextにエラーを渡す必要がある。
//app.get('/products/:id', async (req, res) => {
//    const { id } = req.params;
//    const product = await Product.findById(id);
//    if (!product) {
//        throw new AppError('商品が見つかりません', 404);
//    }
//    res.render('products/show', { product });
//});

//app.get('/products/:id', async (req, res, next) => {
//    const { id } = req.params;
//    const product = await Product.findById(id);
//    if (!product) {
//        //nextを渡すだけだと、エラーは表示されるが、nextの次のres.renderが呼ばれて内部的にはエラーになる
//        //のでnextにreturnを設定する
//        return next(new AppError('商品が見つかりません', 404));
//    }
//    res.render('products/show', { product });
//});

// asyncなのでtry-catchの方がベター
app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            //nextを渡すだけだと、エラーは表示されるが、nextの次のres.renderが呼ばれて内部的にはエラーになる
            //のでnextにreturnを設定する
            return next(new AppError('商品が見つかりません', 404));
        }
        res.render('products/show', { product });
    } catch (e) {
        next(e);
    }
});

//app.get('/products/:id', wrapAsync(async (req, res) => {
//    const { id } = req.params;
//    const product = await Product.findById(id);
//    if (!product) {
//        throw new AppError('商品が見つかりません', 404);
//    }
//    res.render('products/show', { product });
//}));

app.get('/products/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('商品が見つかりません', 404);
    }
    res.render('products/edit', { product, categories });
}));

app.put('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);

}));

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}));

const handleValidationErr = err => {
    console.log(err);
    return new AppError(`入力内容に誤りがあります...${err.message}`, 400);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err);
    next(err);
});

// カスタムエラーハンドラーの定義
app.use((err, req, res, next) => {
    const { status = 500, message = '問題が発生しました' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待受中...');
});
