const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

// moduke.exportsでエクスポートするモジュールを指定しないと呼び出し先で呼び出しても空のオブジェクトになる
// あるファイルに関数や変数を定義したからといってその関数や変数が自動的に他の関数から使える訳では無い
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

//こう書くこともできる
//const math = {
//    add: add,
//    PI: PI,
//    square: square
//};
//module.exports = math;

//こう書くこともできる
//module.exports.add = (x, y) => x + y;
//module.exports.PI = 3.14159;
//module.exports.square = x => x * x;

//こうするとmodule自体を上書きしてしまう
//module.exports = 'HELLO!!';

//こう書くこともできる
//exports = module.exportsというのが定義されているので
//exports.add = add;
//exports.PI = PI;
//exports.square = square;
//こうするともともとの定義を上書きしてしまうのでNG
//exports = 'hoge'

// ディレクトリごと読み込むこともできる
const cats = require('./shelter')
console.log('ディレクトリをrequire:', cats);
