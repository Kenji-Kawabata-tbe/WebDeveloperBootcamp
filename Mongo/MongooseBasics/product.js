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

// スキーマの定義をオブジェクトでより細かく。
const productScheam = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 10,
  },
  price: {
    type: Number,
    required: true,
    //カスタムエラー文字列も指定できる
    min: [0, 'priceはより大きい値にしてください']
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    //enumでここで指定された値しか設定できないようにできる
    enum: ['S', 'M', 'L']
  }
});

//
productScheam.methods.greet = function() {
  console.log('はろーやっほー');
  console.log(`- ${this.name}からの呼び出し`);
}

productScheam.methods.toggleOnsale = function () {
  // onSaleの値を今の値と反転させる
  this.onSale = !this.onSale;
  return this.save();
}

productScheam.methods.addCategory = function(newCat) {
  // categoriesを新しく追加する
  this.categories.push(newCat);
  return this.save();

}

const Product = mongoose.model("Product", productScheam);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: 'マウンテンバイク'});
  foundProduct.greet();
  console.log(foundProduct);
  await foundProduct.toggleOnsale();
  console.log(foundProduct);
  await foundProduct.addCategory('アウトドア');
  console.log(foundProduct);
}

findProduct();

const bike = new Product({
  name: "マウンテンバイク",
  price: 59800,
  //price: '59800' numberぽく見えるものならtype:Numberでも入る
  color: "red", //スキーマに定義されていないプロパティを入れてもエラーにならないが作成されない
  categories: ["サイクリング", "アウトドア"],
});

//このsaveっていうのはインスタンスから呼べているのでインスタンスメソッドという
bike.save()
  .then((data) => {
    console.log("成功!!!");
    console.log(data);
  })
  .catch((err) => {
    console.log("エラー!!!");
    console.log(err);
  });

//const air = new Product({
//    name: '空気入れ',
//    price: 1980,
//    categories: ['サイクリング']
//})
//
//air.save()
//    .then(data => {
//        console.log('成功!!!');
//        console.log(data);
//    })
//    .catch(err => {
//        console.log('エラー!!!');
//        console.log(err.errors.name.properties.message);
//    })

//priceはmin:0だが、findOneAndUpdateではデフォルトではマイナスで更新できてしまう。
//なのでバリデーションを有効にしたい場合はrunValidatorsをtrueにする
//
//findOneAndUpdateみたいなクラスから呼び出すメソッドをスタティックメソッドという
Product.findOneAndUpdate({ name: "空気入れ" }, { price: 1980 }, { new: true, runValidators: true })
  .then((data) => {
    console.log("成功!!!");
    console.log(data);
  })
  .catch((err) => {
    console.log("エラー!!!");
    console.log(err);
  });
