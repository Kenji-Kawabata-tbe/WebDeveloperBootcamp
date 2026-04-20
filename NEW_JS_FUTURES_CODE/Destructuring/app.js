//////分割代入//////

////配列の分割代入
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondScore = scores[1];
//配列から順番に変数に値を入れることができる
const [ gold, silver ] = scores;







////オブジェクトの分割代入

const user = {
    email: 'harvey@example.com',
    passowrd: 'fef9auf8efas8j',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'fesa safe fae',
    city: 'San Francisco',
    state: 'California'
}
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

//const { firstName, lastName, email } = user;
// 元のプロパティを新しい変数に入れることもできる
//const { born: birthYear, died: deatyYear } = user;


const user2 = {
    email: 'stacy@example.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}
//デフォルト値を指定することも可能
const {firstName, lastName, died = 'N/A'} = user2;



//パラメーターの分割代入
//function fullName(user) {
//    return `${user.firstName} ${user.lastName}`:
//}
//function fullName(user) {
//    const { firstName, lastName } = user2;
//    return `${firstName} ${lastName}`;
//}

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
fullName(user2);


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

movies.filter(movie => movie.socre >= 90);
movies.filter(({score}) => score >= 90);

movies.map(movie => {
    return `${movie.title}(${movie.year}): ${movie.score}/100`;
})
movies.map(({title, year, score}) => {
    return `${title}(${year}): ${score}/100`;
})
