const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('コネクションOK！！');
    })
    .catch(err => {
        console.log('コネクションエラー！！！');
        console.log(err);
    })
