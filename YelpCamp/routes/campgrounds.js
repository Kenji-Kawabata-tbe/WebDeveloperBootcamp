const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError')
const Campground = require('../models/campground');
const { campgroundSchema } = require('../schemas')

// joi バリデーション用のミドルウェア
const validateCampground = (req, res, next) => {
    // req.bodyからerrorを分割代入して、campgroundSchemaの設定に沿ってバリデートする
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(detail => detail.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        //何もない時はnextを呼ぶ
        next();
    }
}

// app.jsでapp.use('/campgrounds', campgroundRoutes);
// としているここではパスの先頭にcampgroundsは不要
router.get('/', catchAsync(async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

//順番大事。:idより後ろに設定するとnewをidと勘違いしちゃう。
router.get('/new', catchAsync(async(req, res) => {
    res.render('campgrounds/new');
}));

//router.get('/:id', async(req, res) => {
//    const campground = await Campground.findById(req.params.id);
//    res.render('campgrounds/show', { campground });
//});

router.get('/:id', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    if (!campground) {
        req.flash('error', 'キャンプ場は見つかりませんでした');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { campground });
}));

//router.post('/', async (req, res) => {
//  //res.send(req.body);
//  const campground = new Campground(req.body.campground);
//  await campground.save();
//  res.redirect(`/${campground._id}`);
//})

//エラーハンドリング追加
//asyncの関数のエラーはtry-catchで拾ってnextで返す
//nextではエラーハンドリングが呼ばれるので自分で定義したエラーハンドルが呼ばれる
////router.post('/', async (req, res, next) => {
////  try {
////    const campground = new Campground(req.body.campground);
////    await campground.save();
////    res.redirect(`/${campground._id}`);
////  } catch (e) {
////    next(e);
////  }
////});

//ここにpostが来るとvalidateCampgroundが実行される。その後にcatchAsyncが実行される、という順番
router.post('/', validateCampground, catchAsync(async (req, res) => {
    //if (!req.body?.campground) {
    //    throw new ExpressError(
    //        '不正なキャンプ場のデータです',
    //        400
    //    );
    //}
    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash('success', '新しいキャンプ場を登録しました')

    res.redirect(`/campgrounds/${campground._id}`);
}));




//router.get('/makecampground', async (req, res) => {
//    const camp = new Campground({ title: '私の庭', description: '気軽に安くキャンプ！！' });
//    await camp.save();
//    res.send(camp);
//});

router.get('/:id/edit', async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    if (!campground) {
        req.flash('error', 'キャンプ場は見つかりませんでした');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground });
});

router.put('/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    req.flash('success', 'キャンプ場を更新しました');
    res.redirect(`/campgrounds/${campground._id}`);
}));

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'キャンプ場を削除しました');
    res.redirect('/campgrounds');
}));

module.exports = router;
