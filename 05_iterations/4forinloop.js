//for in loop

//Array
const myNum = [1, 2, 3, 4, 5, 6, 7];

for (const val in myNum) {
  // console.log(val) // print the index of array
  // console.log(myNum[val])
}

//Strings
const greetings = "Hello Brother How Are You";

for (const greet in greetings) {
  // console.log(greet) //prints the index of string characters
  // console.log(greetings.charAt(greet))
}

//objects
const myObj = {
  name: "Sudhanshu",
  lastname: "Gupta",
  age: 15,
  location: "Mumbai",
};

for (const key in myObj) {
  // console.log(key) // prints all keys
}
for (const key in myObj) {
  // console.log(myObj[key]) // prints all values
}

//Map
const map = new Map();

map.set("IN", "India");
map.set("us", "United States");
map.set("NZ", "New Zeland");
map.set("UK", "United Kingdom");

for (const key in map) {
  console.log(key);
}
//Maps are not iteratable through forin loop
