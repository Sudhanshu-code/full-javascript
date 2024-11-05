const myNum = [1, 2, 3, 4];
const initialise = 0;

const total = myNum.reduce(function (acc, currentNum) {
  console.log(`acc: ${acc} and curremntnum: ${currentNum}`);
  return acc + currentNum; //return the sum of all nums in array
}, initialise);
console.log(total);

/* output: when function run for the first time inialialise value assigned to acc after first iteration the value returned by the callback function is assigned to acc...
acc: 0 and curremntnum: 1 
acc: 1 and curremntnum: 2
acc: 3 and curremntnum: 3
acc: 6 and curremntnum: 4
10
*/

//Arrow Function
const totalVal = myNum.reduce((acc, currVal) => acc + currVal, initialise);

// console.log(totalVal)

//example
const shopingCart = [
  {
    book: "JS",
    price: 3999,
  },
  {
    book: "Java",
    price: 5999,
  },
  {
    book: "Python",
    price: 2999,
  },
  {
    book: "React",
    price: 6999,
  },
];

const priceToPay = shopingCart.reduce((acc, book) => acc + book.price, 0);

console.log(priceToPay);
