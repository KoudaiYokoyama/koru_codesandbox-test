/**
 * 分割代入
 */
// const myProfile = {
//   name: "nyanki",
//   age: 21,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 変数名は属性名じゃないといけない
// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

const myProfile = ["nyamaru", 35];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [val1, val2] = myProfile;
const message4 = `名前は${val1}です。年齢は${val2}歳です。`;
console.log(message4);
