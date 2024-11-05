// Stack(Premitive) -- passed by value
// Heap(Non - Premitive) --> passed by reference

let nameOne = "Sudhanshu";

let nameTwo = nameOne;
nameTwo = "Ankit";

console.table([nameOne, nameTwo]); // Sudhanshu, Ankit

// Premitive value are passed as copy of original value in Stack when you make changes in duplicate value it does not reflect in original value

let userOne = {
  email: "user@google.con",
  pass: 1235,
};

let userTwo = userOne;

userTwo.pass = 45624;

console.log(userOne.pass); //45624
console.log(userTwo.pass); //45624

/* Non-Premitive datatypes are passed by reference both userone and usertwo
 pointing to same values in heap so when you make any changes in usertwo values 
userone values will also get changed
*/
