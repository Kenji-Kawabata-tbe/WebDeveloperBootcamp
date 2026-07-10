// nodemon index.jsでサーバが立ち上がる
// 初期データはseed.jsで入れている

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {})
  .then(() => {
    console.log("MongoDB コネクションOK！！");
  })
  .catch((err) => {
    console.log("MongoDB コネクションエラー！！！");
    console.log(err);
  });

//path.joinでこのメソッドに渡された文字列を組み合わせて一つのpathを作り上げる。3つ以上渡すこともできる。
//__dirname はNode.jsの特別な変数で今実行しているファイルが存在しているディレクトリへの絶対パスを返す
//この場合、indexXX.jsの絶対パス。その後ろにviewsがpathに追加される。
//これが無いとindexXX.jsがあるディレクトリでnodeを起動しないとviewが辿れなくてエラーになる
app.set("views", path.join(__dirname, "views"));
//EJSをインストール(npm i ejs)していればrequireする必要はなくそのまま使える
app.set("view engine", "ejs");
//フォームから渡ってきたデータをパースする
//ポストで送られてくるデータには種類(フォーマット)がある。
//受け取る側もそれを変換(パース)するかという事を意識しないといけない
app.use(express.urlencoded({ extended: true }));
//get,post以外のメソッドも使えるように
app.use(methodOverride("_method"));

app.get("/dog", (req, res) => {
  res.send("わんわん");
});

const categories = ["果物", "野菜", "乳製品"];

//商品一覧
app.get("/products", async (req, res) => {
  const { category } = req.query;
  if(category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category:'全' });
  }
  //const products = await Product.find({});
  //console.log(products);
  //res.send('商品一覧を表示予定');
  //テンプレートを使う
  //res.render('products/index');
//  res.render("products/index", { products });
});

//商品登録ページ
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  //みたいにすると登録した後に再読み込みした場合にフォームが再実行されるので
  //別のページにリダイレクトしたほうがいい
  //res.send('新規作成');
  res.redirect(`/products/${newProduct._id}`);
});

//商品ページ
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  //console.log(product);
  //res.send('詳細ページ');
  res.render("products/show", { product });
});

//商品の更新
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

//商品の削除
app.delete("/products/:id", async (req, res) => {
  //res.send('削除');
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

// listen() expressがリクエストを受け付ける状態になる
app.listen(3000, () => {
  console.log("リクエストをポート3000で待受中....");
});
