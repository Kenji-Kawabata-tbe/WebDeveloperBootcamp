const input = document.querySelector('input');
const h1 = document.querySelector('h1');

//changeイベントはinputの場合、フォーカスが無くなった時に発火する
input.addEventListener('change', function(e) {
    console.log('change!!');
})

//inputイベントは入力するだけで、入力した時だけ発火する
input.addEventListener('input', function(e) {
    console.log('input!!');
})

//入力する度にその値をh1に入れる
input.addEventListener('input', function() {
    h1.innerText = input.value;
})


