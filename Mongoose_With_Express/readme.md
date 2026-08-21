// プロジェクトの最初
npm i express ejs mongoose
touch index.js
mkdir views

//node起動
nodemon index.js

// seed 初期データ投入
// seedは初期データという意味で使われる
// seedを投入するとかっていう使い方をする
// node側
node seeds.js
// mongo側
mongosh
show dbs
use farmStand
db.products.find()
