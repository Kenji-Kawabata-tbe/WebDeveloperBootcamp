//filter
//提供されたテスト関数を満たす要素からなる新しい配列を生成する
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

numbers.filter((num) => {
    return num < 4;
})



const doubles = numbers.map(function(num) {
    return num *2;
})


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1984
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const goodMovies1 = movies.filter(movie => {
    return movie.score > 80;
});
const goodMovies2 = movies.filter(movie => movie.score > 80);
const goodMovies3 = movies
    .filter(movie => movie.score > 80)
    .map(movie => movie.title);

const Names= (['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']);

function validUserNames(usernames) {
    return usernames.filter(name => name.length < 10);
}

