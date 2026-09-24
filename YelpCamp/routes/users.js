const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registerUser = await User.register(user, password);
        console.log(registerUser);
        req.flash('success', 'Yelp Campへようこそ！');
        res.redirect('/campgrounds');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

// passportを使ってログイン
// リクエストボディに入っているusernameとpasswordを見てかつpasswordをハッシュ化して
// データベースのものと一致するかを裏で全部やっている
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'} ) , (req, res) => {
    req.flash('success', 'おかえりなさい！！');
    res.redirect('/campgrounds');
});

router.get('/logout', (req, res) => {
    // passportのlogoutメソッドでログアウト
    req.logout();
    req.flash('success', 'ログアウトしました');
    res.redirect('/campgrounds');
});

module.exports = router;
