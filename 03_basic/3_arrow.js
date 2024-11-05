const user = {
  userName: "Sudhanshu",
  price: 999,

  welcomeMsg: function () {
    //  console.log(`${this.userName}, welcome to website`)  //here we refering to current contaxt ie use this keyword
    //console.log(this) // refering to cuurent contaxt variable
  },
};
user.welcomeMsg();
user.userName = "Ankit";
user.welcomeMsg();

//console.log(this) //refering to most global object because there is no any contaxts in global thats why is returns empty object{} in node enviornment but in browser it refers to window

function newfun() {
  const name = "Sudhanshu";
  console.log(this.name); //print undefined --this works only on objects ont on functions
  console.log(this);
}
// newfun()

const func = function () {
  const name = "Sudhanshu";
  console.log(this.name); //print undefined --this works only on objects ont on functions
  console.log(this);
};
// func()

const newFunction = () => {
  const name = "Sudhanshu";
  console.log(this.name); //print undefined
  console.log(this);
};
// newFunction()

/***********************************Arrow Function*********************** */

const funOne = (num1, num2) => {
  return num1 + num2;
};

//if u use {} in arrow funt then u have to use return keyword
const funTwo = (num1, num2) => num1 + num2; //implicit return
const funThree = (num1, num2) => num1 + num2; //implicit return
const funFour = (num1, num2) => ({ username: "Sudhanshu" }); // if want to return an object then it should be wraped in ()

console.log(funOne(4, 6));
console.log(funTwo(4, 6));
console.log(funThree(4, 6));
console.log(funFour(4, 6));
