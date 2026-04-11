
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
