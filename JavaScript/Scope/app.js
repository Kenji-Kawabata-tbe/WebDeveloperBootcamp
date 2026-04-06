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
