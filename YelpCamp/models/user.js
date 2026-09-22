const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
const { UserExistsError } = require('passport-local-mongoose/lib/errors');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//pluginメソッドでpassportLocalMongooseの機能をuserSchemaに差し込める
//代表的なところでusername,hash,saltフィールドがモデルに追加される
userSchema.plugin(passportLocalMongoose, {
    // errorメッセージを任意の値に変更できる。
    errorMessages: {
        UserExistsError: 'そのユーザー名はすでに使われています。',
        MissingPasswordError: 'パスワードを入力してください。',
        AttemptTooSoonError: 'アカウントがロックされてます。時間をあけて再度試してください。',
        TooManyAttemptsError: 'ログインの失敗が続いたため、アカウントをロックしました。',
        NoSaltValueStoredError: '認証ができませんでした。',
        IncorrectPasswordError: 'パスワードまたはユーザー名が間違っています。',
        IncorrectUsernameError: 'パスワードまたはユーザー名が間違っています。',
    }
});

module.exports = mongoose.model('User', userSchema);
