function collect() {
    let total = 6;
}
//見れない
//console.log(total);

let bird = 'a'

function birdWatch() {
    let bird = 'b'
    //これはb
    //console.log(bird);
}
//これは a
//birdWatch();
//console.log(bird);

let redius = 8;
// {} はブロックと呼ばれ、この中のスコープはこのブロック内に限定される。
if (redius > 0) {
    const PI = 3.14;
    let area = PI * redius * redius;
    console.log(area);
}
//これはエラー
//console.log(PI);
//console.log(msg);

for (let i = 0; i < 10; i++) {
    var msg = 'hello';
}
//varはブロックスコープではないのでこれはOKになる。基本、varは使わない。
console.log(msg);

function bankRobbery() {
    const heroes = ['スパイダーマン', 'スーパーマン', 'ブラックパンサー'];
    function help() {
        for (let hero of heroes) {
            console.log(`Help me! ${hero}!`);
        }
    }
    //レキシカルスコープ コード上のどこで定義したかによってスコープが決まること
    //これが無いとheroesが読み込めないのでbankRobbery()を実行してもundefindになる
    help()
}
bankRobbery()

//レキシカルスコープ  その②
// あいうえお
let xxx = 'あいうえお';
function hoge() {
    console.log(x);
}

//　これも　あいうえお　になる
// hogeでは直前のxxxを読み込むので。
function moge() {
    let xxx = 'かきくけこ';
    hoge();
}


//関数式 関数名は不要　変数名を使って呼び出す
const add = function(x, y) {
    return x + y;
}
add(9,4)

const square = function(x) {
    return x * x;
}

//高階関数
//引数や戻り値で関数を扱う関数
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
callTwice(rollDie)

function makeRandomFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log('おめでとう!');
        }
    } else {
        return function() {
            alert('残念');
        }
    }
}
makeRandomFunc()

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}
const isChild = makeBetweenFunc(0, 18);
isChild(49);
