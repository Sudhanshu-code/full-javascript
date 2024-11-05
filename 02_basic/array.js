const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const myarr = ["Sudhanshu", "Ankit", "Aniket", "Abhishek"];

// console.log(arr[2]);

myarr.push("Surya"); // Add in the last of array
myarr.unshift("Prashant"); // Add on index 0
myarr.shift(); //remove from index0

// console.log(myarr)

// console.log(myarr.includes("Sudhanshu"))  //true
// console.log(myarr.indexOf("Surya")) //4

const newArr = myarr.join();

console.log(newArr);

/* Slice & Splice */

console.log("A", arr);
console.log(" ");

const myArr2 = arr.slice(2, 5);
console.log("B", myArr2);
console.log("Original", arr);

console.log(" ");

const myArr3 = arr.splice(2, 5); // Splice changes the original array -- it will removes 5 elements from starting index 2
console.log("C", myArr3);
console.log("Original", arr);
