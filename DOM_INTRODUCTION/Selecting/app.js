// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}

//要素をIDで取得してimageという変数に代入
const image = document.getElementById('unicorn')
//要素をIDで取得してheadingという変数に代入
const heading = document.getElementById('mainheading')

//要素をtagで取得してallImagesという変数に代入
const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    img.src = 'https://********'
}

//要素をclassで取得してsquareImagesという変数に代入
const squareImages = document.getElementsByClassName('square');
for (let img of squareImages) {
    img.src = 'https://********'
}

// document.querySelector
// 単一の要素を取得できるセレクターメソッド
// 最初に見つけた一つを取得する
const links = document.querySelector('p');


// document.querySelectorAll
// 対象となる要素全てを取得するセレクターメソッド
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}

const doneTodos = document.getElementsByClassName('done');
const checkbox = document.querySelector('input[type="checkbox"]');
