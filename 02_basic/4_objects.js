//Singleton object using cunstructor

const user = new Object(); // a singleton object

const fbUser = {
  // non singleton user
  email: "me@google.com",
  bioData: {
    fullName: {
      firstName: "Sudhanshu",
      lastName: "Gupta",
    },
    age: 20,
    location: "Mumbai",
  },
};

//console.log(fbUser.bioData.fullName.firstName); // access nested object

//How to combaine objects
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = (obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2); // merge 2 objects
const obj4 = { ...obj1, ...obj2 }; // mostly used
// console.log(obj3)

const newObject = {
  name: "Sudhanshu",
  age: 25,
  location: "Chennai",
  isloging: true,
  gender: "male",
};

// console.log(Object.keys(newObject))  // *********very imp very high use
// console.log(Object.values(newObject))
// console.log(Object.entries(newObject)) //Returns an array of key/values of the enumerable properties of an object

// console.log(newObject.hasOwnProperty("name")) //Determines whether an object has a property with the specified name.

/* *********************Obejct Destructuring *********************/

const course = {
  courseTeacher: "Sudhanshu",
  courseValue: 4555,
  courseSubject: "JavaScript",
};

console.log(course.courseTeacher); //if i want to you it in multiple places then every time i have to say course.courceTeacher instead of that we can use OBJECT DESTRUCTURING

/* when we use props in react instead of props.name we use {name} this is also Destructuring*/
const { courseTeacher } = course; // using {} we are destructuring object key as variable
console.log(courseTeacher);

const { courseTeacher: teacher } = course; // using object key as variable by different name
console.log(teacher);
