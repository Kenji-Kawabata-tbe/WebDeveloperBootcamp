const express = require('express');
//呼び出し元のパラメータを使いたい場合(この場合app.jsのapp.use('/campgrounds/:id/reviews', reviewRoutes);の:id)
//はmergeParams: trueオプションを使う
const router = express.Router({ mergeParams: true });
const { validateReview } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');

//レビュー投稿
router.post('/', validateReview, catchAsync(async (req, res) => {
    // :idのcampgroundSchemaの情報がcampgroundに入る
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    // campgroundのreviews[]にreviewの情報を入れる
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'レビューを登録しました');
    res.redirect(`/campgrounds/${campground._id}`);
}));

router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    // $pull 特定の要素を条件を指定して除外
    // reviewsからreviewIdの値を削除
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success', 'レビューを削除しました');
    res.redirect(`/campgrounds/${id}`);
}));

module.exports = router;
