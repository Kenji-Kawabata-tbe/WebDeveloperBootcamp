// try catch
// tryの処理が失敗したらcatchの処理を行い、その続きも行う
// hello.toUpperCase();だけだとエラーが起きた時点で終了する
try {
    hello.toUpperCase();
} catch {
    console.log('エラーが起きました');
}
console.log('続き');

function shout(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    // catchの後に変数を入れるとその変数の中にエラーが入るようになる
    } catch(e) {
        console.log('shoutには文字列を入れてください');
        console.log(e);
    }
}
shout('yah');
shout(1);
