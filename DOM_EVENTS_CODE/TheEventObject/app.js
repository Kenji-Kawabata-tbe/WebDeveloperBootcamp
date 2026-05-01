document.querySelector('button').addEventListener('click', function(evt) {
    //こうするとイベントが起きた時の情報が渡される。
    //この場合、マウスイベント。見えてる座標とか。
    console.log('evt');
})

const input = document.querySelector('input');
input.addEventListener('keydown', function() {
    console.log('keydown');
});

input.addEventListener('keyup', function() {
    console.log('keyup');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    // keydownやkeyboradの場合はキーボードイベントが渡される
    // keyは押されたキーが表す文字
    // codeは押されたキーがどこの位置のキーかを表す値
    console.log(e);
    console.log(`key: &{e.key}`);
    console.log(`code: &{e.code}`);
});

// addEventListenerはページ全体、グローバルなイベント処理としてwindowにつけることもできる
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('上');
            break;
        case 'ArrowDown':
            console.log('下');
            break;
        case 'ArrowLeft':
            console.log('左');
            break;
        case 'ArrowRight':
            console.log('右');
            break;
        default:
            console.log('無視');
    }
})
