/** ランダムな数字を生成: [1..6]. */

function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

/** N個のサイコロを振る => [num, ...]. */

function getRolls(n) {
  return Array.from({ length: n }, () => d6());
}

/** 数字の和を求める */

function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

export { d6, getRolls, sum };
