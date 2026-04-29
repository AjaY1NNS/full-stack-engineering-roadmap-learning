//  Functions are First-Class Citizens
//  In JavaScript, functions are first-class citizens, which means they can be treated like any other value. They can be assigned to variables, passed as arguments to other functions, and returned from functions. This allows for a high degree of flexibility and enables powerful programming techniques such as higher-order functions and closures.

// 1. Assigning Functions to Variables
function greet(name) {
    return "Hello, " + name + "!";
}
const greetFunction = greet; // Assigning the function to a variable
console.log(greetFunction("Alice")); // Output: Hello, Alice!

// 2. Passing Functions as Arguments
function sayHello(name) {
    return "Hello, " + name + "!";
}
function greetUser(greetingFunction, name) {
    return greetingFunction(name); // Passing the function as an argument
}
console.log(greetUser(sayHello, "Bob")); // Output: Hello, Bob!

// 3. Returning Functions from Functions
function createGreeting(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}
const sayHi = createGreeting("Hi"); // Returning a function from another function
console.log(sayHi("Charlie")); // Output: Hi, Charlie!

// 4. Higher-Order Functions
// A higher-order function is a function that takes another function as an argument or returns a function as a result. This allows for powerful programming techniques such as function composition and currying.
function map(array, transformFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(transformFunction(array[i])); // Using a function as an argument
    }
    return result;
}

function double(x) {
    return x * 2;
}
const numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, double)); // Output: [2, 4, 6, 8, 10]

// In this example, we have defined a map function that takes an array and a transform function as arguments. The map function applies the transform function to each element of the array and returns a new array with the transformed values. We then defined a double function that doubles a number and passed it to the map function to double each element in the numbers array.
// In summary, functions being first-class citizens in JavaScript allows for a high degree of flexibility and enables powerful programming techniques. This is a fundamental concept in JavaScript that is essential for writing effective and efficient code.

