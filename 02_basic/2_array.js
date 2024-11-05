const hero =["thor", "krish", "shaktiman"]

const marvel = ["Spider Man","Hulk", "Iron Man"]

const dcHero = ["Batman","SuperMan", "Flash"]

// hero.push(marvel)    
//push: Appends new elements to the end of an array, and returns the new length of the array.
// console.log(hero) 

/* output: array takes any data that why it takes array as data and store it on the last index
[ 'thor', 'krish', 'shaktiman', [ 'flash', 'captain', 'Iron Man' ] ]
*/

const allHero =hero.concat(marvel) 
/*concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
 limitation: here you can use only one array */

// console.log(allHero)

const allNewHero = [...hero, ...marvel, ...dcHero]; // spread operator : can use multiple array value
// console.log(allNewHero)

const newArray =[1,2,3,[4,5,6],7,[8,9,[10]]]

const real_newArray = newArray.flat(2); 
//flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_newArray)


/* Usefull for DATA <SCRAPING></SCRAPING>*/

console.log(Array.isArray("Sudhanshu"))
console.log(Array.from("Sudhanshu")) //Creates an array from an iterable object. 
//output: [  'S', 'u', 'd','h', 'a', 'n','s', 'h', 'u']
console.log(Array.from({name:"Sudhanshu"})) //it will return empty array : to make it work you have to specify the that weather you want array of keys or values.


let scor1 =100
let scor2 = 200
let scor3 = 300

console.log(Array.of(scor1,scor2,scor3)) //Returns a new array from a set of elements.