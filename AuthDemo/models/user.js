const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'usernameは必須です']
    },
    password: {
        type: String,
        required: [true, 'passwordは必須です']
    },
});

//パスワードとハッシュ値の比較を行う
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}

//mongooseのミドルウェアを使って保存する前にハッシュ化を行ってから保存する
userSchema.pre('save', async function (next) {
    //this.password = 'hogehogemogemoge';
    //passwordが更新された場合はパスワードをハッシュ化して、そうじゃ無ければnext
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);
