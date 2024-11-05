const id = "sudhanshu";
var email = "sudhanshu@gmail.com";
let pass = "56164";
country ="india";

// id= "ankit"; // error const variable can't be changed
//console.log(id) // output-error

email="ankit@gmail.com"
pass= "6455"
country="Bharat"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([email,pass,country]);


/* output
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 'ankit@gmail.com' │
│ 1       │ '6455'            │
│ 2       │ 'Bharat'          │
└─────────┴───────────────────┘
*/