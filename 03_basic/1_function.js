function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
  return number1 + number2;
}

// addTwoNumbers(4,6)

function loingUser(username) {
  return `${username} just logged in`;
}

// console.log(loingUser("Sudhanshu"))

function authUser(username) {
  if (!username || username === undefined) {
    //if arguments are not provided then it takes parameters as undefined
    console.log("please enter username");
  }
  return `${username} just logged in`;
}

// authUser() //arguments are not provided

function auth(username = "Sudhanshu") {
  //if arguments are given then it use it otherwise it uses default parameter
  return `${username} just logged in`;
}
auth();

/* if we dont know how many parameters will come to function then we use REST OPERATOR (...)
Ex: in cart section we dont know how many items will customer add 
*/

//it is passed as array
function cart(...items) {
  // console.log(items)
}

cart(15, 150, 46, 45, 231, 150);
//output : [ 15, 150, 46, 45, 231, 150 ]

function cart2(item1, itrm2, ...items) {
  // console.log(items)
}
cart2(15, 150, 46, 45, 231, 150); //first 2 will be item 1&2 and rest will be items
//output : [ 46, 45, 231, 150 ]

/************************** */
const user = {
  name: "Sudhanshu",
  price: 216,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject["name"]} and price is ${anyObject.price}`
  );
}
handleObject(user);

const myArray = [1, 5, 1, 5, 6, 8, 9, 8];

function handleArray(anyArray) {
  console.log(anyArray[5]);
}
handleArray(myArray);
