const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); // till 2 digit after decimal - 100.00

const otherNumber = 1113.8966;

// console.log(otherNumber.toPrecision(4)); //123.9 //return till 4 digit number

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); //10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4-nearest value
// console.log(Math.ceil(4.2)); // 5 - upper value
// console.log(Math.floor(4.9)); //4 - lowwer value
// console.log(Math.min(4, 3, 6, 8)); // 3- minimum value
// console.log(Math.max(4, 3, 6, 8)); // 8 - maximum value

console.log(Math.random()); // 0<value<1
console.log(Math.random() * 10 + 1); // here 10 is for maximum value(till 10),if dont want 0 then add 1 in the end like here
console.log(Math.floor(Math.random() * 10) + 1); // if want lower round off value use floor function

//if want value in range of min & max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Math.floor(0.55155*(20-10+1)+10)
