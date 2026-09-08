const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters')
const dogRoutes = require('./routes/dogs')

// /sheltersにshelterRoutesのルーターを紐づける
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);

app.listen(3000, () => {
    console.log('ポート3000でリクエスト受付中...')
});
