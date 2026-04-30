
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = makeRandColor();
        button.style.Color = makeRandColor();
    })
}


const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', function() {
        // コールバック関数(イベントハンドラー)の中でのthisは
        // デフォルトではそのイベントが設定された要素自身になる
        // この場合はh1になる
        console.log(this);
        //以下は同じようにh1のスタイルを変えることになる
        //h1.style.backgroundColor = makeRandColor();
        //h1.style.Color = makeRandColor();
        this.style.backgroundColor = makeRandColor();
        this.style.Color = makeRandColor();
    })
}

//ちなみにallow関数でthisを使うとthisはその周りのスコープが対象になるので
//この場合はh1要素ではなくその上位のWindow指すことになるので意図した動作にならない
//イベントのコールバック関数でthisを使う場合はアロー関数を使っていいのかどうかを適宜判断する必要がある
for (let h1 of h1s) {
    h1.addEventListener('click', () => {
        console.log(this);
        this.style.backgroundColor = makeRandColor();
        this.style.Color = makeRandColor();
    })
}


//thisを使うとこうできる
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.Color = makeRandColor();
}

for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}
