let date = new Date();

// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

// let createDate = new Date(2024,0,24)
// let createDate = new Date(2024,0,24,5,6)
let createDate = new Date("01-01-2024");
// console.log(createDate)

let timeStamp = Date.now();
console.log(timeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
