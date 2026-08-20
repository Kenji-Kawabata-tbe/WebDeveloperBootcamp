const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBコネクションOK！！');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー！！！');
        console.log(err);
    });

//1対数個
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [{
        // デフォルトの設定では_idが作成されるが、id:falseにすることで作成しないようにすることもできる
        _id: { id: false },
        country: String,
        prefecture: String,
        address1: String,
        address2: String,
    }]
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: '太郎',
        last: '山田'
    });

    u.addresses.push({
        country: '日本',
        prefecture: '北海道',
        address1: '札幌市',
        address2: '０丁目０番地',
    })

    const res = await u.save();
    console.log(res);
}
//makeUser();

//既存のユーザに新たなアドレスを追加
const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        country: '日本',
        prefecture: '青森県',
        address1: '青森市',
        address2: '０丁目０番地',
    })
    const res = await user.save();
    console.log(res);
}

addAddress('6a7af62b4b8a5610d99bffe4');
