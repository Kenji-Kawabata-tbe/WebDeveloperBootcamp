//forEach
//関数を受け取ってその関数を各々の要素に対して呼び出す
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

//function print(element) {
//    console.log(element);
//}
//numbers.forEach(print);

//こう書く方が多い
numbers.forEach(function (element) {
    console.log(element);
})

//for ofと同じ。forEachのほうが前からあるやり方
//for ofだとstringに対しても使えるし分かりやすいので今後はfor ofの方がいいかも
for (let elem of numbers) {
    console.log(elem);
}


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// Amadeus - 99/100
movies.forEach(function(movie) {
    console.log(`${movie.title}- ${movie.score}/100`);
})
//const f = function(movie) {
//    console.log(`${movie.title}- ${movie.score}/100`);
//}
//movies.forEach(f)
