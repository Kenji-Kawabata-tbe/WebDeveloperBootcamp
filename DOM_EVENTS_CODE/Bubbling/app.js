const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

// こうするとbuttonをクリックした時にcontainerのイベントも発生するので
// 色を変えてもcontainerのhideが実行されてbuttonが表示されなくなる
//button.addEventListener('click', function() {
//   container.style.backgroundColor = makeRandColor();
//})

button.addEventListener('click', function(e) {
    //バブリングをストップするメソッド
    e.stopPropagation();
    container.style.backgroundColor = makeRandColor();
})


container.addEventListener('click', function() {
    container.classList.add('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

