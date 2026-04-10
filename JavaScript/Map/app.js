//map
//与えられた関数を配列のすべての要素に対して呼び出し
//その結果からなる新しい配列を生成する


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

//[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34]
//ちなみにfunction(num)はコールバック関数と呼ぶ。
//メソッド(この場合map)に渡していて、そのメソッドが良きタイミングで呼び戻す(コールバック)するから
const doubles = numbers.map(function(num) {
    return num *2;
})


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

//['Amadeus', 'Stand By Me', 'Parasite', 'Alien']
const titles = movies.map(function(movie) {
    return movie.title;
})

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(fullname) {
    return fullname.first;
})
