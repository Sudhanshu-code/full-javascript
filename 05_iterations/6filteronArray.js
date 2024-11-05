//Filters in array

const myNum = [1, 2, 3, 4, 5, 6, 7];

//Array filter method
//Returns the elements of an array that meet the condition specified in a callback function.
const numbers = myNum.filter((num) => num > 4);

// console.log(numbers)

//how filter works using forloop
const newNum = [];
myNum.forEach((nums) => {
  if (nums > 4) {
    newNum.push(nums);
  }
});
// console.log(newNum)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBook;

userBook = books.filter((book) => book.genre === "Fiction");

userBook = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});

console.log(userBook);
