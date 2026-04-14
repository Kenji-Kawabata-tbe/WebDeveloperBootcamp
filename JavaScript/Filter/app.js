const exams = [80, 98, 92, 78, 77 ,90, 89, 84, 81, 77]
// every
//全ての要素が75以上ならtrue、そうじゃなければfalse
exams.every(exam => exam >= 75);

// some
//どれか一つの要素が90以上ならtrue、そうじゃなければfalse
exams.every(exam => exam >= 90);


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

movies.some(movie => movie.year > 2015);


function allEvens(nums) {
    return nums.every(num => num % 2 ===0);
}
