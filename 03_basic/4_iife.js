//Immediately Invoked Function Expressions (IIFE)

/********IIFE is a JavaScript function that runs as soon as it is called */

//the first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variable within the IIFE idiom as well as polluting the global scope.

//the second part creates the IIFE () through which the javascript engine will directly interpret the function

//USE CASE: Avoid polluting the global namespace

// to add 2 IIFE function add ; in the end of the function
(function name() {
  //named IIFE because it has name
  console.log("Hello Brother");
})(); //to stop the function add semicolon (;) after executing the function otherwise it throws the error

(() => {
  //unnamed or Simple IIFE
  console.log("hii");
})();

//how to pass arguments and parameters

(function name(name) {
  console.log(`Hello ${name} Brother`);
})("Sudhanshu"); //to stop the function add ; after execution

((name) => {
  console.log(`hii ${name}`);
})("Sudhanshu");
