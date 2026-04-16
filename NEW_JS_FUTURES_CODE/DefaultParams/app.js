//デフォルト引数 パラメーターの後ろに=でデフォルト値を設定する
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'こんにちは', suffix='!!') {
    console.log(`${msg}、${person}さん${suffix}`);
}
//複数のパラメーターがあって途中をデフォルト値にしたい場合
//こうするとmsgに。、personに山田が入る
//greet('山田', '。')
//デフォルト値を使いたいパラメーターの引数をundefinedを指定する
greet('山田', undefined, '。')
