// Dates

let myDate = new Date();
console.log(myDate.toString()); //Tue Mar 12 2024 21:29:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Tue Mar 12 2024
console.log(myDate.toLocaleString()); //12/3/2024, 9:30:02 pm
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

console.log(myTimeStamp); //1710259265509  - in milliseconds
console.log(myCreatedDate.getTime()); //1673634600000 - in milliseconds
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});
