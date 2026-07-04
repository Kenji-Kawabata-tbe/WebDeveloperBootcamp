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

const Person = mongoose.model('Person', personSchema);
