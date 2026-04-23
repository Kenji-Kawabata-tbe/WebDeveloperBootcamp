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
// 隠れているものも含めて全ての要素の内容を取得
const links = document.querySelector('p').textContent;
const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.innerText = '私はリンクです';
}

// innerHTMLの場合、その要素の中のhtmlも含めて取得する
const links = document.querySelector('p').innerHTML = '<i>ABCD</i>';

const taste = document.querySelector('span').innerText = 'まずい';

