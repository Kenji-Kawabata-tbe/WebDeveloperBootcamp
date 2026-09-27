const ExpressError = require('./utils/ExpressError');
const { campgroundSchema, reviewSchema } = require('./schemas');
const Campground = require('./models/campground');
const Review = require('./models/review');

module.exports.isLoggedIn = (req, res, next) => {
    //セッションの中に入っている情報を元にデシリアライズしたユーザーの情報が
    //req.userに入っているのでそれを取得することができる
    console.log('req.user', req.user);


    //isAuthenticatedメソッドでログイン済かどうかを判定できる
    if (!req.isAuthenticated()) {
        //console.log(req.path, req.originalUrl);
        // ログインした時に元々いたページに戻るようにする
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'ログインしてください');
        return res.redirect('/login');
    }
    next();
}

// joi バリデーション用のミドルウェア
module.exports.validateCampground = (req, res, next) => {
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

module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    //リクエストしたユーザががauthorと一致しない場合は更新させない
    if(!campground.author.equals(req.user._id)) {
        req.flash('error', 'そのアクションの権限がありません');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    //リクエストしたユーザががauthorと一致しない場合は更新させない
    if(!review.author.equals(req.user._id)) {
        req.flash('error', 'そのアクションの権限がありません');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}

// joi バリデーション用のミドルウェア
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(detail => detail.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}
