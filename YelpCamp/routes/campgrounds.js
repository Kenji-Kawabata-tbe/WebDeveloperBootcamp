const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');

// app.jsでapp.use('/campgrounds', campgroundRoutes);
// としているここではパスの先頭にcampgroundsは不要
router.get('/', catchAsync(async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

//順番大事。:idより後ろに設定するとnewをidと勘違いしちゃう。
router.get('/new', isLoggedIn, catchAsync(async(req, res) => {

    res.render('campgrounds/new');
}));

//router.get('/:id', async(req, res) => {
//    const campground = await Campground.findById(req.params.id);
//    res.render('campgrounds/show', { campground });
//});

router.get('/:id', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews').populate('author');
    console.log(campground);
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
router.post('/', isLoggedIn, validateCampground, catchAsync(async (req, res) => {
    //if (!req.body?.campground) {
    //    throw new ExpressError(
    //        '不正なキャンプ場のデータです',
    //        400
    //    );
    //}
    const campground = new Campground(req.body.campground);
    //現在のユーザをauthorに設定
    campground.author = req.user._id;
    await campground.save();
    req.flash('success', '新しいキャンプ場を登録しました')

    res.redirect(`/campgrounds/${campground._id}`);
}));




//router.get('/makecampground', async (req, res) => {
//    const camp = new Campground({ title: '私の庭', description: '気軽に安くキャンプ！！' });
//    await camp.save();
//    res.send(camp);
//});

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
        req.flash('error', 'キャンプ場は見つかりませんでした');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground });
}));

router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    req.flash('success', 'キャンプ場を更新しました');
    res.redirect(`/campgrounds/${camp._id}`);
}));

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'キャンプ場を削除しました');
    res.redirect('/campgrounds');
}));

module.exports = router;
