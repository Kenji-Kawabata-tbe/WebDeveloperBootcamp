const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');

// app.jsでapp.use('/campgrounds', campgroundRoutes);
// としているここではパスの先頭にcampgroundsは不要
router.get('/', catchAsync(campgrounds.index));

//順番大事。:idより後ろに設定するとnewをidと勘違いしちゃう。
router.get('/new', isLoggedIn, campgrounds.renderNewForm);

//router.get('/:id', async(req, res) => {
//    const campground = await Campground.findById(req.params.id);
//    res.render('campgrounds/show', { campground });
//});

router.get('/:id', catchAsync(campgrounds.showCampground));

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
router.post('/', isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));




//router.get('/makecampground', async (req, res) => {
//    const camp = new Campground({ title: '私の庭', description: '気軽に安くキャンプ！！' });
//    await camp.save();
//    res.send(camp);
//});

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));

router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground));

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

module.exports = router;
