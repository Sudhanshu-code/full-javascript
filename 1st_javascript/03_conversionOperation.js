let score = "33"; //string

console.log(typeof score); //string

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber); // Number
console.log(scoreInNumber); // 33

// "33" => 33
// "33abc" => type->number, value->NaN(not in number)
//true => 1; false=>0

let isloggedIN = "Sudhanshu";
let booleanisloggedIN = Boolean(isloggedIN);
console.log(typeof booleanisloggedIN); //boolean
console.log(booleanisloggedIN); //true

// 1=>true , 0=>false
// "" => false
// "Sudhanshu" => true

let someNumber = 220;

let strinSomenumber = String(someNumber);
console.log(typeof strinSomenumber); //String
console.log(strinSomenumber); // "220"

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
