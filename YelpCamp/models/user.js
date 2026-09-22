const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//pluginメソッドでpassportLocalMongooseの機能をuserSchemaに差し込める
//代表的なところでusername,hash,saltフィールドがモデルに追加される
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
