// コールスタック http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D!!!
//どの関数が現在実行されているか？その関数の中でどの関数が呼び出されたか？などの情報
//スタックはデータ構造の仕組み。最後に入れたものを最初に取り出す。Last In First Out
const multiply = (x, y) => x * y;
const square = x => multiply(x, x);
const isRightTriangle = (a, b, c) => (
    square(a) * square(b) === square(c)
)

//chromeの開発者コードのブレイクポイントのステップインで1行ずつ処理することでコールスタックの確認が可能
isRightTriangle(3, 4, 5);
