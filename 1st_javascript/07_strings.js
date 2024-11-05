const Username = "Sudhanshu";
const repoCount = 50;

// console.log(name + repoCount + " Value"); //not a good practice

console.log(`Hello my name is ${Username} and my repo count is ${repoCount}`); // string interpolation using backticks

const gameName = new String("Sudhanshu-dev-com");

console.log(gameName[0]); //S
console.log(gameName.__proto__); //an object

// console.log(gameName.length); //17
// console.log(gameName.toUpperCase()); //SUDHANSHU-DEV-COM
console.log(gameName.charAt(2)); //d
console.log(gameName.indexOf("t")); //-1 means does not exit

const newString = gameName.substring(0, 4); // - does not include 4th index
console.log(newString); //Sudh

const anotherString = gameName.slice(4, 6); // returns a section of string from 4th index to 6-1th index
const anotherStrings = gameName.slice(-4, 6); //dev-com
console.log(anotherString); // an

const newStringOne = "   Ankit    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //remove extra white spaces

const url = "https://sudhanshu.com/ankit%20gupta";

console.log(url.replace("%20", "-")); // replace the first value by second value

console.log(url.includes("sundar")); // return true or false

console.log(gameName.split("-")); //Split a string into substrings using the specified separator and return them as an array. //[ 'Sudhanshu', 'dev', 'com' ]
