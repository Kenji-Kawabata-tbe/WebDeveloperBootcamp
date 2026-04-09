// メソッド　オブジェクト内に定義された関数
const myMath = {
    PI: 3.14,
    //square: function (num) {
    //以下の省略系で記載される事が多い
    square(num) {
        return num * num;
    },
    //cube: function (num) {
    //以下の省略系で記載される事が多い
    cube(num) {
        return num ** 3;
    }
}
myMath.PI
myMath.square(3);
myMath.square(4);

const kakezan = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}
