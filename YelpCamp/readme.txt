http://localhost:3000/campgrounds

■バージョン
バージョン1
finish-424まで

バージョン2 style適用
finish-442まで

バージョン3 エラーハンドリング、バリデーション適用
finish-466まで

バージョン4 レビュー追加
finish-488まで

バージョン5 ルーティング設定、フラッシュ追加
finish-まで


■初期
npm i express mongoose@5 ejs
npm i method-override
■node
// 初期データでデータリセット
// node seeds/index.js
nodemon app.js

■mongo
mongosh
show dbs
use yelp-camp
show collections
db.campgrounds.find()



