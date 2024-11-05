//forof loop

// Array
const myNum =[1,2,3,4,5,6,7]

for (const val of myNum) {
    // console.log(val)
}


//Strings
const greetings = "Hello Brother How Are You"

for (const greet of greetings) {
    if(greet ===" ") {
        continue
    }
    // console.log(greet)
}


//map

const map = new Map()

map.set('IN', "India")
map.set('us', "United States")
map.set('NZ',"New Zeland")
map.set('UK', "United Kingdom")

for (const key of map) {
    // console.log(key)
}

for (const [key, value] of map) {
    // console.log(key + ":-" + value)
}


const myObj = {
  name: "Sudhanshu",
  lastname: "Gupta",
  age: 15,
  location: "Mumbai",
};

// for (const val of myObj) {
    //   console.log(val);
 // }
// myObj is not iterable by forof loop