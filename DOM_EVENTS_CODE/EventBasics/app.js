const btn2 = document.querySelector('#v2');

btn2.onclick = function () {
    console.log('click')
    console.log('hoge')
}


function scream() {
    console.log('click')
    console.log('hoge')
}

// 関数そのものをonmouseenterに値として設定している。関数も値の一つ。公開関数を参照。
// onmouseenterのイベントが起きた時にscream関数が実行される
btn2.onmouseenter = scream;

document.querySelector('h1').onclick = function() {
    alert('h1をクリック');
}
document.querySelector('h1').onclick = () => {
    alert('h1をクリック');
}

function hoge() {
    console.log('hoge');
}

function moge() {
    console.log('moge');
}



const btn3 = document.querySelector('#v3');
// addEventListener イベント、処理の順で書く
btn3.addEventListener('click', function() {
    alert('クリック!!!');
});

// onclickだと一つのイベントに複数の関数を割り当てることができない。その場合はaddEventListenerの方が便利
const hogemogeButton = document.querySelector('#hogemoge');
hogemogeButton.onclick = hoge;
hogemogeButton.onclick = moge;

hogemogeButton.addEventListener('click', hoge);
hogemogeButton.addEventListener('click', moge);

//addEventListenerだとオプションも設定できる
hogemogeButton.addEventListener('click', hoge, {once: true});
hogemogeButton.addEventListener('click', moge, {once: true});

hello.addEventListener('click', function() {
    console.log('hello');
});
goodbye.addEventListener('click', function() {
    console.log('goodbye');
});
