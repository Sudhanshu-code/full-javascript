if (true) {
  let a = 4;
  const b = 45;
  var c = 10;
}
// console.log(a); // throws error as a is not defined
// console.log(b); // b is not defined error
// console.log(c); // prints 10 : thats why we avoid using var

function one() {
  const userName = "Sudhanshu";

  function two() {
    const website = "instagram";
    // console.log(userName);
  }
  //console.log(website); // website not defined error
  two();
}
one();

// ********************Interesing********************

console.log(addone(5)); // it will work without any error
function addone(value) {
  return value + 1;
}

console.log(addTwo(8)); // throw an error : Cannot access 'addTwo' before initialization
const addTwo = function (value) {
  //  here we are decalring and holding the value : Hosting Concept
  return value + 1;
};
