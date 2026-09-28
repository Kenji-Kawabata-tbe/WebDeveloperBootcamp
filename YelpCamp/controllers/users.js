const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registerUser = await User.register(user, password);
        console.log(registerUser);
        // passportのlogoutメソッドでユーザ登録と同時にログインも行う
        req.login(registerUser, err => {
            if (err) return next(err);
            req.flash('success', 'Yelp Campへようこそ！');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'おかえりなさい！！');
    // セッションの中のreturnToｈがあれぼそこにリダイレクトし、なければ/campgroundsにリダイレクト
    // req.session.returnToはmiddleware.jsで定義している
    const redirectUrl = req.session.returnTo || '/campgrounds';
    // returnToは消さないと残り続けるので、使い終わったら削除する
    delete req.session.returnTo;
    res.redirect(redirectUrl);
    //res.redirect('/campgrounds');
}

module.exports.logout = (req, res) => {
    // passportのlogoutメソッドでログアウト
    req.logout();
    req.flash('success', 'ログアウトしました');
    res.redirect('/campgrounds');
}
