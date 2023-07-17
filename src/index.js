/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);
// // letは上書きが不可能
// // let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// // constは上書き・再宣言不可
// // val3 = "const変数を上書き";
// // const val3 = "const変数を再宣言";

// //オブジェクトであれば、constであっても変更可能
// const val4 = {
//   name: "jammiloquai",
//   age: 28,
// };
// val4.name = "kamira";
// val4.address = "Hiroshima";
// console.log(val4);

// //配列であっても、変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Kiki vivi lily";
// const age = 31;
// // 「私の名前はkikkivivililyです。28歳です。」
// // 従来の方法
// const message1 = "私の名前は" + name + "です。" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。${age}歳です。`;
// console.log(message2);
