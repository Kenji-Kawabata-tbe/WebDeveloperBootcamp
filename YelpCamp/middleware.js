module.exports.isLoggedIn = (req, res, next) => {
    //セッションの中に入っている情報を元にデシリアライズしたユーザーの情報が
    //req.userに入っているのでそれを取得することができる
    console.log('req.user', req.user);


    //isAuthenticatedメソッドでログイン済かどうかを判定できる
    if (!req.isAuthenticated()) {
        req.flash('error', 'ログインしてください');
        return res.redirect('/login');
    }
    next();
}

