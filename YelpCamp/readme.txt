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
finish-507まで

バージョン6 認証(Passport使って。ちなみにPassportのハッシュ関数はpbkdf2)
finish-520まで

バージョン7 キャンプ場に登録者の追加、その認可
ここまでがこのコースの最低限の内容。以降はより細かいリファクターとかスタイルの仕上げ
finish-526まで

バージョン8
finish-まで


■初期
npm i express mongoose@5 ejs
npm i method-override
■node
//初期データでデータリセット
node seeds/index.js
■起動
nodemon app.js



★macでのmongo起動方法
・dockerでmyDeployment起動
・mongosh

★ubuntu
install
https://www.mongodb.com/try/download/community
#起動
sudo systemctl start mongod
mongosh


■mongo
mongosh
show dbs
use yelp-camp
show collections
db.campgrounds.find()



