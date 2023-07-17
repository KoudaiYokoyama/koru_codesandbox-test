/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   console.log(`文字列は${str}です。`);
//   return str;
// }

// const func1 = function (str) {
//   console.log(`文字列は${str}です。`);
//   return str;
// };
// func1("yayayaya");

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(`文字列は${func2("jajajaja")}です。`);

const func3 = (val1, val2) => val1 + val2;

console.log(`20＋30＝${func3(20, 30)}`);
