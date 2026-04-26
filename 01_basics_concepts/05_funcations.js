// Funcations

// Funcations are reusable blocks of code that perform a specific task. They can take inputs, called parameters, and can return a value. Functions help to break down complex problems into smaller, manageable pieces, making code more organized and easier to read.
// 1. Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

// 2. Function expression
const greet2 = function(name) {
  return `Hi, ${name}!`;
}
console.log(greet2("Bob")); // Hi, Bob!
// 3. Arrow function
const greet3 = (name) => {
  return `Hey, ${name}!`;
}
console.log(greet3("Charlie")); // Hey, Charlie!

// 4. Implicit return in arrow function
const greet4 = name => `Welcome, ${name}!`;
console.log(greet4("Dave")); // Welcome, Dave!
// 5. Function with multiple parameters
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15
// 6. Function with default parameters
function multiply(a, b = 1) {
  return a * b;
}   
console.log(multiply(5)); // 5 (b defaults to 1)
console.log(multiply(5, 2)); // 10
// 7. Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15  
// 8. Function with callback
function fetchData(callback) {
  setTimeout(() => {    
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}
fetchData((data) => {
  console.log("Data received:", data);
}); // Data received: { id: 1, name: "John Doe" } (after 1 second)
// 9. Function with closure
function outerFunction(outerVariable) { 
    return function innerFunction(innerVariable) {  
    console.log("Outer variable:", outerVariable);
    console.log("Inner variable:", innerVariable);
  } 
}
const closureExample = outerFunction("I am from the outer function");
closureExample("I am from the inner function"); 
// Outer variable: I am from the outer function
// Inner variable: I am from the inner function
// 10. Function with recursion
function factorial(n) {
  if (n === 0) {    
    return 1;
  }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// 11. Function with IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("This function runs immediately!");
})(); // This function runs immediately!

// 12. Function with higher-order functions
function higherOrderFunction(callback) {
  const value = 10;
  return callback(value);
}
function double(x) {
  return x * 2;
}
console.log(higherOrderFunction(double)); // 20 (double function is passed as a callback to higherOrderFunction)    

// 13. Function with async/await
function fetchDataAsync() {
  return new Promise((resolve) => { 
    setTimeout(() => {
      const data = { id: 1, name: "Jane Doe" };
      resolve(data);
    }, 1000);
    }); 
}
async function getData() {
  const data = await fetchDataAsync();
  console.log("Data received:", data);
}
getData(); // Data received: { id: 1, name: "Jane Doe" } (after 1 second)

// 14. Function with generator
function* generatorFunction() {
  yield "First value";
  yield "Second value";
  yield "Third value";
}   

const generator = generatorFunction();
console.log(generator.next().value); // First value
console.log(generator.next().value); // Second value
console.log(generator.next().value); // Third value
console.log(generator.next().value); // undefined (no more values to yield)


// 16. Currying function
function curry(a) {
  return function(b) {
    return a + b;
  }
}
const curriedFunction = curry(5);
console.log(curriedFunction(10)); // 15 (5 + 10)
console.log(curry(5)(10)); // 15 (5 + 10, using currying in a single line)

// 17. Currying function with multiple parameters
function multi(a) {
  let result = a;

  function inner(b) {
    if (b === undefined) return result;
    result *= b;
    return inner;
  }

  return inner;
}
console.log(multi(5)(20)(30)()); // 3000 (5 * 20 * 30, using currying in a single line)