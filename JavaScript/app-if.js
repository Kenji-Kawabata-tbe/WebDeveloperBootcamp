console.log("条件分岐の前");

if (1 + 2 === 2) {
  console.log("計算してみる");
}

console.log("条件分岐の後");

let random = Math.random();
if (random < 0.5) {
  console.log("数字は0.5より小さい");
  console.log(random);
}

const daiOfWeek = "Monday";

if (daiOfWeek === "Monday") {
  console.log("月曜日は憂鬱");
} else if (daiOfWeek === "Saturday") {
  console.log("土曜日は最高");
}

const age = 35;

if (age < 5) {
  console.log("無料になります");
} else if (age < 10) {
  console.log("子供料金なので1000円になります");
} else if (age < 65) {
  console.log("大人料金なので2000円になります");
}
