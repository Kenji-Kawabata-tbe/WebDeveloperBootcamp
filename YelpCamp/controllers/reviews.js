const Campground = require('../models/campground');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
    // :idのcampgroundSchemaの情報がcampgroundに入る
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    // campgroundのreviews[]にreviewの情報を入れる
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'レビューを登録しました');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    // $pull 特定の要素を条件を指定して除外
    // reviewsからreviewIdの値を削除
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success', 'レビューを削除しました');
    res.redirect(`/campgrounds/${id}`);
}
