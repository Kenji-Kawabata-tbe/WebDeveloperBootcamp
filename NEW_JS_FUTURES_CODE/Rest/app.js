function sum() {
// arguments 引数を全て受け取ることができる
    console.log(arguments);
}
// 配列のように0: 1,1: 2,2: 3のように表示される。ただしargumentsは配列ではないのでpushとかreduceはできない
sum(1, 2, 3)


// レスト構文(残余引数)
// ...でその位置にある残りの引数を配列の中に入れることができる。スプレッドと勘違いしないように
function sum1(...nums) {
    console.log(nums);
    return nums.reduce((total, num) => total + num);
}
sum1(1, 2, 3)

function recaResults(gold, silver, ...rest) {
    console.log(`金: ${gold}`);
    console.log(`銀: ${silver}`);
    console.log(`その他: ${rest}`);
}
recaResults('太郎', '次郎', '三郎', '四郎', '五郎')
