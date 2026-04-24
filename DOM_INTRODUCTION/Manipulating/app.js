const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = '私はリンクです！！！！';
// }

for (let link of allLinks) {
    link.style.color = 'red';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

//　ページ上で見えているものだけ取得
const links = document.querySelector('p').innerText;
const links = document.querySelector('p').innerText = '<i>ABCD</i>';
// 隠れているもの(display=noneとか)も含めて全ての要素の内容を取得
const links = document.querySelector('p').textContent;
const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.innerText = '私はリンクです';
}

// innerHTMLの場合、その要素の中のhtmlも含めて取得する
const links = document.querySelector('p').innerHTML = '<i>ABCD</i>';

const taste = document.querySelector('span').innerText = 'まずい';

// 属性の取得、属性の変更
const firstLink = ducument.querySelector('a');
firstLink.href;

firstLink.getAttribute('href');
firstLink.setAttribute('href', 'https://google.com');

const imgSrc = document.querySelector('img')
imgSrc.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg', 'alt', 'chicken')
imgSrc.setAttribute('alt', 'chicken')

//スタイルの変更
const h1 = document.querySelector('h1')
h1.style.color
h1.style.coloer = 'green'
h1.style.fontSize = '3em'
h1.style.border = '2px solid pink'

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.style.coloer = 'red';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

//最終的にどのスタイルが当たっているかを知る方法
//getComputedStyleに要素のオブジェクトを渡す
getComputedStyle(h1).color
getComputedStyle(h1).fontsize



const containerId = document.getElementById('container')
containerId.style.textAlign = 'center'

const treeImg = document.querySelector('img');
treeImg.style.width = '150px';
treeImg.style.borderRadius = '50%';


const spans = document.querySelectorAll('h1 span');

spans.forEach((span, index) => {
  span.style.color = colors[index];
});
