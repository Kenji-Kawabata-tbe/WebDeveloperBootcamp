////要素をIDで取得してimageという変数に代入
//const image = document.getElementById('unicorn')
////要素をIDで取得してheadingという変数に代入
//const heading = document.getElementById('mainheading')

////要素をtagで取得してallImagesという変数に代入
//const allImages = document.getElementsByTagName('img');
//for (let img of allImages) {
//    img.src = 'https://********'
//}

////要素をclassで取得してsquareImagesという変数に代入
//const squareImages = document.getElementsByClassName('square');
//for (let img of squareImages) {
//    img.src = 'https://********'
//}

//// document.querySelector
//// 単一の要素を取得できるセレクターメソッド
//// 最初に見つけた一つを取得する
//const links = document.querySelector('p');

//// document.querySelectorAll
//// 対象となる要素全てを取得するセレクターメソッド
//const links = document.querySelectorAll('p a');





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


const h2 = document.querySelector('h2')
// クラスの取得
h2.getAttribute('class')
// クラスの適用
h2.setAttribute('class', 'purple')
// こうすると前のpurpleも上書きされちゃう
h2.setAttribute('class', 'border')
const currentClasses = h2.getAttribute('class');
currentClasses
// 両方のクラスの適用 面倒なやり方
h2.setAttribute('class', `${currentClasses} purple`);


const h2 = document.querySelector('h2')
h2.classList
// classList.addで今のクラスに追加できる
h2.classList.add('purple')
h2.classList.add('border')
h2.classList.remove('border')
// 適用されているかいないかがbooleanで返ってくる
h2.classList.contains('border')
// 切り替える。適用されている場合は外す、外れるている場合は適用する。トグル。
h2.classList.toggle('border')

const liList = document.querySelectorAll('li')
liList.forEach(li => {
    li.classList.toggle('highlight');
  });



const firstBold = document.querySelector('b');
firstBold
// 親要素を確認
firstBold.parentElement
// さらに上の親を辿っていける
firstBold.parentElement.parentElement
// 子要素を確認
firstBold.children

const paragraph = firstBold.parentElement
paragraph.children

const squareImg = document.querySelector('.square');
squareImg
squareImg.parentElement
squareImg.children

// 次の要素ではなく次のノードを返す
squareImg.nextSibling
// 次の要素を返す
squareImg.nextElementSibling
// 前の要素を返す
squareImg.previousElementSibling


// 要素のオブジェクトを作る この場合，img要素のnewImgというオブジェクト
const newImg = document.createElement('img')
// 作ったオブジェクトに値を入れる
newImg.src = 'https://images.XXXXX'
// 要素を別の要素の子要素として追加。この場合、一番後ろに追加される
document.body.appendChild(newImg)
newImg.classList.add('square')

const newH3 = document.createElement('h3')
newH3.innerText = '新規要素参上'
document.body.appendChild(newH3)

const p = document.querySelector('p')
// apend 値を子要素として直接後ろに追加できる
p.append('おおおお')
// prepend 値を子要素として直接先頭に追加できる
p.prepend('ああああ')

const h2 = document.createElement('h2')
h2.append('可愛らしい烏骨鶏')
const h1 = document.querySelector('h1')
// 兄弟要素として追加する
// h1の直後にh2を入れる　
h1.insertAdjacentElement('afterend', h2);

h3.innerText = 'H3!!!'
// h2の直後にh3を追加
h2.after(h3)

const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
  const button = document.createElement('button');
  button.textContent = `Button ${i}`;
  container.appendChild(button);
}


const firstLi = document.querySelector('li')
// 子要素の削除。
// firstLiを消したい場合、親要素を辿ってその子要素を削除する
const ul = firstLi.parentElement
ul.removeChild(firstLi)

//　まとめて書くこともできる
const b = document.querySelector('b')
b.parentElement.removeChild(b)

// remove シンプルに要素の削除ができる
const img = document.querySelector('img')
img.remove()
