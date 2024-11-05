// how data is stored in memory and how to access that data on basis of that there are two type of datatypes

//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//SymbolReturns a new unique Symbol value.
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(typeof anotherId); //symbol

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n

/**********  Referenced type/ (Non primitive) ******************/

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array

//object
let myObj = {
  name: "hitesh",
  age: 22,
};

//function
const myFunction = function () {
  console.log("Hello world");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3
