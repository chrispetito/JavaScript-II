// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function firstFunction() {
  const newVar = 'TEST';
  console.log(`This is a ${newVar}`);
  
  function secondFunction() {
    console.log (`This is the second ${newVar}`);

    function thirdFunction() {
      console.log(`This is the third ${newVar}`);
    } thirdFunction();
  }secondFunction();
};

firstFunction();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
var a = 0;
const counter = function() {
  console.log(a += 1);
};
  // Return a function that when invoked increments and returns a counter variable.
counter();
counter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = function() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
