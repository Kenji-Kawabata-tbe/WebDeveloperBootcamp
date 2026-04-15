
//const add = function(x, y) {
//    return x + y;
//}

//arrow関数
//通常の関数式の簡潔な代替構文

//やっている事は↑のaddと同じ
const add = (x, y) => {
    return x + y;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) +1;
}

//パラメーターが1つの時だけ()を省略することができる
const square = num => {
    return num * num;
}

const greet = (name) => {
    return `Hey ${name}!`;
}

//暗黙的なreturn
//式が1つだけの時だけ利用できる
const rollDie2 = () => (
    Math.floor(Math.random() * 6) +1
);

const rollDie3 = () => Math.floor(Math.random() * 6) +1;

const add2 = (x, y) => {
    x + y
};

const add3 = (x, y) => x + y;

//式が一つの時だけ省略可能なので以下はエラーになる
//const rollDie3 = () => (
//    const msg = 1;
//    Math.floor(Math.random() * 6) +1
//);

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

//const newMovies = movies.map(function (movie) {
//    return `${movie.title} - ${movie.score / 10}`;
//})

//↑と同じものをarrow関数で
const newMovies1 = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
const newMovies2 = movies.map(movie =>
    `${movie.title} - ${movie.score / 10}`
)


//Arrow関数のthis
const person1 = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: function() {
        return `${this.lastName} ${this.firstName}`;
    }
}

// Arrow関数とそうでない関数ではthisの決まり方が違う
// Arrow関数内のthisは関数の外のスコープにあるthisを指すのでこの場合はundefindになる
const person2 = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: () => {
        return `${this.lastName} ${this.firstName}`;
    },
    delayName: function() {
        setTimeout(function () {
            console.log(this.fullName());
        }, 2000);
    }
}

const person3 = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: () => {
        return `${this.lastName} ${this.firstName}`;
    },
    //　setTimeoutをArrow関数にするとその外のthisをみるようになって成功する
    delayName: function() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 2000);
    }
}


