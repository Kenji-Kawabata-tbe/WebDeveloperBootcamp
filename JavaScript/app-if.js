// if
//console.log("条件分岐の前");
//
//if (1 + 2 === 2) {
//  console.log("計算してみる");
//}
//
//console.log("条件分岐の後");
//
//let random = Math.random();
//if (random < 0.5) {
//  console.log("数字は0.5より小さい");
//  console.log(random);
//}
//
//const daiOfWeek = "Monday";
//
//if (daiOfWeek === "Monday") {
//  console.log("月曜日は憂鬱");
//} else if (daiOfWeek === "Saturday") {
//  console.log("土曜日は最高");
//}


// else-if
//const age = 35;
//
//if (age < 5) {
//  console.log("無料になります");
//} else if (age < 10) {
//  console.log("子供料金なので1000円になります");
//} else if (age < 65) {
//  console.log("大人料金なので2000円になります");
//}


// else
//const dayOfweekElse = prompt('英語で入力してください').toLocaleLowerCase();
//
//if (dayOfweekElse === "monday") {
//  console.log("月曜日は憂鬱");
//} else if (dayOfweekElse === "saturday") {
//  console.log("土曜日は最高");
//} else {
//  console.log('はぁ。。。');
//}

// ifのネスト
//const password = prompt('パスワードを入力してください');
//
//if (password.length >= 6) {
//  if (password.indexOf(' ') === -1) {
//    console.log('OK');
//  } else {
//    console.log('空白があります');
//  }
//} else {
//  console.log('パスワードが短すぎます。6文字以上にしてください')
//}

// Trutyh/Falsy
//const userInput = prompt('なにか入力してください');
//if (userInput) {
//  console.log('TRUTHY');
//} else {
//  console.log('FALSY');
//}

// and
//const password = prompt('パスワードを入力してください');
//
//if (password.length >= 6 && password.indexOf(' ') === -1) {
//    console.log('OK');
//  } else {
//  console.log('パスワードのフォーマットが不正です');
//}

// or
//const age = 90;
//
//if ((age >= 0 && age < 5) || age >= 65) {
//  console.log("無料になります");
//} else if ( age >= 5 && age < 10) {
//  console.log("子供料金なので1000円になります");
//} else if (age >= 10 && age < 65) {
//  console.log("大人料金なので2000円になります");
//} else {
//  console.log("無効な年齢です");
//}

// not
//let username = prompt('ユーザー名を入力してください');
//if (!username) {
//  username = prompt('問題が起きました。ユーザー名を入力してください');
//}
//
//const age = 11;
//
//if (!(age >= 0 && age < 5 || age >= 65)) {
//  console.log("有料です");
//}
