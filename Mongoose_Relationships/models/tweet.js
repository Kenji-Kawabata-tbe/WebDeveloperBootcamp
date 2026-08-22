// 1対超たくさん
// 子に親の情報を持たせる

const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBコネクションOK！！');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー！！！');
        console.log(err);
    });

const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    //UserのオブジェクトIDだけを保存する
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// 新しくUserとTweetを作成して、Tweetのuserに作成したUserを設定する
//const makeTweets = async () => {
//    // ホントはnameじゃなくてusernameで登録しないといけないはず
//    const user = new User({ name: 'yamada99', age: 61 });
//    const tweet1 = new Tweet({ text: '今日は晴れてて気分がいい', likes: 0 });
//    //tweetSchemaのuserにuserSchemaのオブジェクトを設定する
//    tweet1.user = user;
//    user.save();
//    tweet1.save();
//}

//// 新しくTweetを作成して、Tweetのuserに既存のUserを設定する
//const makeTweets = async () => {
//    const user = await User.findOne({ age: 61 });
//    const tweet2 = new Tweet({ text: 'ほげもげほげもげ', likes: 100 });
//    //tweetSchemaのuserにuserSchemaのオブジェクトを設定する
//    tweet2.user = user;
//    tweet2.save();
//}
//
//makeTweets();


const findTweet = async () => {
    // オブジェクトIDだけじゃなくuserのデータを全て取得
    //const t = await Tweet.findOne({}).populate('user');
    // populateの第2引数でuserの取りたいデータを指定できる
    //const t = await Tweet.findOne({}).populate('user', 'username');
    // findoneだけじゃなくfindにすると全てのuserが取得できる
    const t = await Tweet.find({}).populate('user', 'username');
    console.log(t);
}

findTweet();



