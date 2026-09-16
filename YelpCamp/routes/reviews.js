const express = require('express');
//呼び出し元のパラメータを使いたい場合(この場合app.jsのapp.use('/campgrounds/:id/reviews', reviewRoutes);の:id)
//はmergeParams: trueオプションを使う
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError')
const Campground = require('../models/campground');
const Review = require('../models/review');
const { reviewSchema } = require('../schemas')


// joi バリデーション用のミドルウェア
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(detail => detail.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

//レビュー投稿
router.post('/', validateReview, catchAsync(async (req, res) => {
    // :idのcampgroundSchemaの情報がcampgroundに入る
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    // campgroundのreviews[]にreviewの情報を入れる
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}));

router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    // $pull 特定の要素を条件を指定して除外
    // reviewsからreviewIdの値を削除
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    res.redirect(`/campgrounds/${id}`);
}));

module.exports = router;
