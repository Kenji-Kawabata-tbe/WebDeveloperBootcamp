////////////デフォルト引数 パラメーターの後ろに=でデフォルト値を設定する////////////
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'こんにちは', suffix='!!') {
    console.log(`${msg}、${person}さん${suffix}`);
}
//複数のパラメーターがあって途中をデフォルト値にしたい場合
//こうするとmsgに。、personに山田が入る
//greet('山田', '。')
//デフォルト値を使いたいパラメーターの引数をundefinedを指定する
greet('山田', undefined, '。')







////////////スプレッド構文////////////
// ...がスプレッド構文
// 配列だけでなく列挙可能なオブジェクト(順番に処理することができるオブジェクト)であれば利用可能

//配列のスプレッド構文
Math.max(13, 4, 5, 6, 21, 9, 21, 2222)
Math.min(2, 5, 1)

const nums = [13, 4, 5, 6, 21, 9, 21, 2222]
// これはエラー。Math.maxは配列ではなく数字が欲しいから
//Math.max(nums)
Math.max(...nums)

const cats = ['Tama', 'Tora', 'Momo'];
const dogs = ['Hachi', 'Pochi'];
cats.concat(dogs)

// cats.conatactと同様に配列を合体させることもできる
const allPets1 = [...cats, ...dogs];
const allPets2 = [...cats, 'Sakura', ...dogs];

const testMoji = ['あいうえお'];
// こうすると一つ一つの文字が要素として展開された配列になる
const testMoji2 = [...testMoji];
