const express = require('express');
const router = express.Router();


// router.useでこのrouterに設定されている全てのルーティングにミドルウェアを適用する
// querystringで?isAdmin=trueの場合は処理を続ける
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    //そうじゃない場合はNot Adminを返す
    res.send('Not Admin!!!');
})

router.get('/secret', (req, res) => {
    res.send('secret!!!');
});

router.get('/deleteall', (req, res) => {
    res.send('deleted all!!!');
});

module.exports = router;
