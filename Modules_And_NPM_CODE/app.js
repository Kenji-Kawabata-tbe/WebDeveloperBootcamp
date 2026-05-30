//　自分で定義した別のファイルを参照するための設定。ファイル名はjsを省略して指定する
//const math = require('./math');
// 分割代入で使う関数を絞ることもできる
const { PI, square } = require('./math');

//console.log(math);
console.log(PI);
console.log(square(9));
