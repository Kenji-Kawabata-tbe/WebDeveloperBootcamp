//reduce
//配列の各要素に対して(引数で与えられた)reducer関数を実行して「単一の出力値」を生成する

const prices = [980, 1500, 1980, 4980, 2980];

let total = 0;
for (let price of prices) {
    total += price;
}

//↑と同じ
prices.reduce((total, price) => total + price)

prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
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

movies.reduce((bestMovie, currMovie) => {
    if (bestMovie.score < currMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

const evens = [2, 4, 6, 8]
//初期値を与えることもできる。この場合50
const sum = evens.reduce((sum, num) => sum + num, 50);
