/**
 * maplやfilterを使った配列の処理
 */
const nameArr = ["adam", "bob", "charry"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// // mapは処理が書き込める配列。下の例ではnameArrの要素がひとつずつnameに入る
// const nameArr2 = nameArr.map((name) => {
//   if (name != "bob") return name;
//   else return "boby";
// });
// console.log(nameArr2); // ['adam', 'boby', 'charry']

//第２引数を指定すると、添え字が入る
nameArr.map((name, index) => console.log(`${index}番目は${name}です。`)); //ひとつずつ出力する
// 0番目はadamです。
// index.js:17 1番目はbobです。
// index.js:17 2番目はcharryです。

// // filterはある条件に一致したものだけを返却し、新しい配列を作成する
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 == 1; //filterではreturn文に条件式を書く
// });
// console.log(newNumArr);// [1, 3, 5]

const newNameArr = nameArr.map((name) => {
  if (name === "adam") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr); // ['adam', 'bobさん', 'charryさん']
