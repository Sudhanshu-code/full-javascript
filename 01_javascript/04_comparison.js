// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/* 
the reason is that an equality check == and comparisons >,<,>=,<= works differently
Comparison converts null to number, treating it as 0.
That's why (3) null>=0 is TRUE and (1) null>0 is FALSE
*/

console.log(undefined == 0); //false
console.log(undefined > 0); // false
console.log(undefined < 0); //false

// Strict check by === beacause it checks DATA TYPE too

console.log("2" === 2); //false
