//map function in array

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNum.map((nums)=> nums+10);

// console.log(newNums)


//chaining
const newNum = myNum
                .map((num)=> num*10) //output: 10,20,30,...
                .map((num)=> num+1) //output: 11,21,31,...
                .filter((num)=> num>40) //output: 41,51,61...

console.log(newNum)
