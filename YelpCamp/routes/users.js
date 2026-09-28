const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/users');

router.get('/register', users.renderRegister);

router.post('/register', users.register);

router.get('/login', users.renderLogin);

// passportのauthenticateメソッドを使ってログイン
// リクエストボディに入っているusernameとpasswordを見てかつpasswordをハッシュ化して
// データベースのものと一致するかを裏で全部やっている
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'} ) , users.login );

router.get('/logout', users.logout);

module.exports = router;
