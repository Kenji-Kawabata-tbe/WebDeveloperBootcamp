// 実行
// node product.js

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("コネクションOK！！");
  })
  .catch((err) => {
    console.log("コネクションエラー！！！");
    console.log(err);
  });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

// virtual
// personSchemaのインスタンスからfullNameが呼ばれた時に
// firstとlastを返す
// あたかもfullNameというプロパティがあるかのように振る舞う
// .getと逆の.setもある
personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`;
});

// ミドルウェア .preとか.post
// node
// .load person.js
// const tanaka = new Person({first: 'Taro', last: 'Tanaka'})
// tanaka.save()で実行される
//
// mongosh
// use shopApp
// db.people.find()
personSchema.pre('save', async function() {
    this.first = 'ほげ',
    this.last = 'もげ',
    console.log('今から保存するよ');
});

personSchema.post('save', async function() {
    console.log('保存したよ');
});

// Personの場合、コレクション名はpeopleになる
const Person = mongoose.model('Person', personSchema);
