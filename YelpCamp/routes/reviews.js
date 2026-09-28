const express = require('express');
//呼び出し元のパラメータを使いたい場合(この場合app.jsのapp.use('/campgrounds/:id/reviews', reviewRoutes);の:id)
//はmergeParams: trueオプションを使う
const router = express.Router({ mergeParams: true });
const { isLoggedIn, validateReview, isReviewAuthor } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const reviews = require('../controllers/reviews');

//レビュー投稿
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;
