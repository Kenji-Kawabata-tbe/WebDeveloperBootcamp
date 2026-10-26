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

バージョン8 コントローラーと★での評価
finish-531まで

バージョン9 画像アップロード
finish-546まで

バージョン10 地図、クラスターマップ(微妙)
finish-561まで
たぶん、CSPで防がれてる。開発者ツールのConsoleから確認できる。

バージョン11 スタイルの仕上げ
finish-567まで

バージョン12 よくあるセキュリティ対策
finish-575まで
・568 SQLインジェクション app.js mongoSanitize
・569,570 XSS sheams.js sanitize-html
・571 cookieの設定 app.jsのconst sessionConfig = {のcookieの設定
・572 本番じゃない時だけ.dotenv使ったりエラーの詳細出したり app.jsとerror.ejsのif (process.env.NODE_ENV !== 'production') {
・574,575 HTTPヘッダー/CSP app.js helmet

バージョン13
finish-578まで
やったけどconnect-mongoの情報が古いかなにかで動かない
579からのherokuはやってない

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



