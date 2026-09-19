const bcrypt = require('bcrypt');

//const hashPassword = async (pw) => {
//    // genSaltがソルトを生成するメソッド
//    // 第一引数の数字はsaltRoundsというもので、どれだけ生成の難しいハッシュ値を作るかという難易度みたいなもの
//    // 上がれば上がるほど生成に時間がかかり意図的に重い処理にできる
//    // 一般的には250ミリ秒ぐらいかかる処理がいいと言われている。ラウンド数にすると12くらい。
//    // ソルトはランダムで生成されるので実行の度にハッシュ値も変わることになる。
//    // ちなみに、ハッシュをする時にラウンド数が使われるのでソルトを作る処理だけの場合は変化はない
//    const salt = await bcrypt.genSalt(12);
//    //受け取ったpwをsaltと一緒にbcrypt.hashに渡すことでハッシュ化できる
//    const hash = await bcrypt.hash(pw, salt);
//    console.log(salt);
//    console.log(hash);
//}

//hashPassword('123456');

const login = async(pw, hashedPw) => {
    // bcrypt.compareにpwとハッシュ値を渡すとpwとハッシュ値の比較が実行できる
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('ログイン成功！！！！');
    } else {
        console.log('ログイン失敗！！！！');
    }
}
// ユーザから渡された値をどうやってハッシュ化するかというと、bcryptはもうどこにソルトがあるかを知っているので
// そのソルトの値とパスワードを使ってもう一回ハッシュをかけた値が引数のハッシュと一致するかを比較する
//login('123456', '$2b$12$Yvw9uy/W2pwd5.1ZkzATIuEuA3jnvR4BXTYt7XOJih1GQydQw6BMy');


const hashPassword = async (pw) => {
    //hashの引数にpwとラウンド数を指定するとsaltとhashをまとめて設定することができる。
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}
hashPassword('123456');
//login('123457', '$2b$12$PuzmHBPyT2u9eoQKA8flueS6uQ3WnrpFolyizYQLarY9krT90gP4i');
