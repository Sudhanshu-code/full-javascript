//singleton : when we declare object as literal then it does not form singleton

//obejct literals
let msg = Symbol("hii")
const users ={
    name: "Sudhanshu",
    "Last Name": "Gupta",
    age: 25,
    isMarried: false,
    location: "Mumbai", 
    [msg]: "Hello Brother" // to create symbol data use [] first we have to declare it
}
// internally Javascript treats objects key as String  
console.log(users.name)
console.log(users["isMarried"]) // another way to access objects data
// console.log(users.Last Name) // this is not a way to access the : it will throw error: use [] to access
console.log(users["Last Name"])
console.log(users[msg]) // to access the Symbol type values


//freeze function
users.location="Bengaluru"
// Object.freeze(users)
 //freeze: Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// users.location="Kolkata"
// console.log(users)

users.greeting= function(){
    console.log("Hello users how are you?")
}
users.greetingTwo= function(){
    console.log(`Hello ${this.name} ${this["Last Name"]} how are you?`)
}

console.log(users.greeting())
console.log(users.greetingTwo())
console.log(users)

