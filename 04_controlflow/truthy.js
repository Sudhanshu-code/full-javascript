// falsy Value
/* false, 0, -0, BigInt 0n, "", null, undefined, NaN */

//Truthy Value
/* true, "0", 'false', " ", [], {}, function(){}, */

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Empty Object");
}

//Nullish Coalescing Operator (??): null undefind
/* The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */
let val;
val = 5 ?? 10; // return left value
val = null ?? 12; //return right value
val = undefined ?? 10; //return right value
val = null ?? 10 ?? 20; //return right value

// console.log(val)

//Terniary Operator
const price = 100;
price >= 90 ? console.log("high price") : console.log("low price");
