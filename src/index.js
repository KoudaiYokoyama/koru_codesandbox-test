/**
 * デフォルト値、引数など
 */
const sayHello = (name = "default") => console.log(`Hello, ${name}`);
sayHello();

/**
 * スプレッド構文 ...
 */
// // 配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1); // [1, 2]
// console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); // 3
// sumFunc(...arr1); // 3

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2; //分割代入しなかった値がarr3に代入される
console.log(num1);
console.log(num2);
console.log(...arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4]; //arr4と全く同じ配列
console.log(arr6); //[10, 20]
const arr7 = [...arr4, ...arr5];
console.log(arr7); //[10, 20, 30, 40]
