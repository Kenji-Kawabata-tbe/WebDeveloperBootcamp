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

const feline = {legs: 4, family: 'ネコ科'};
const canine = {family: イヌ科, bark: true};

// オブジェクトの場合、こうするとfelineのfamilyがcanineのfamilyに上書きされる
const catDog = {...feline, ...canine};

const newFeline = {...feline, id: 123, isVerified: false}

