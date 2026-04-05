//let input = prompt('なにか入力してください');
//while(true) {
//    input = prompt(input);
//    // quit
//    if (input === 'quit') {
//        break;
//    }
//}

//for (let i = 0; i < 1000; i++) {
//    console.log(i);
//    if (i === 100)break;
//}

let maximum = prompt("数字を入力してください");
while (!maximum) {
    maximum = parseInt(prompt('エラーが起きました。有効な数字を入力してください：'));
}

//const targetNum = Math.floor(Math.random() * maximum) + 1;
//console.log(targetNum);
//let count = 1;
//
//let guess = prompt('一つ数字を決めました。数字を当ててみてください:');
//while (guess !== targetNum) {
//    count++;
//    if (guess > targetNum) {
//        guess = parseInt(prompt('その数字より小さいです！もう一度当ててみてください:'));
//    } else {
//        guess = parseInt(prompt('その数字より大きいです！もう一度当ててみてください:'));
//    }
//}
//console.log(`正解! ${count}回で当たりました!`);

const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = prompt('一つ数字を決めました。数字を当ててみてください:');
let count = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    count++;
    if (guess > targetNum) {
        guess = parseInt(prompt('その数字より小さいです！もう一度当ててみてください:'));
    } else {
        guess = parseInt(prompt('その数字より大きいです！もう一度当ててみてください:'));
    }
}
if (guess === 'q') {
    console.log('ゲームを終了します。');
} else {
    console.log(`正解! ${count}回で当たりました!`);
}

