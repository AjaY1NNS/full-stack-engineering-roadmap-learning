// Destructuring & Spread
// Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays. It allows you to unpack values from arrays or properties from objects into distinct variables.

const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
// Object Destructuring
const { name, age, city } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: New York

const numbers = [1, 2, 3, 4, 5];
// Array Destructuring
const [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// Spread syntax allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Spread in Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

// Spread in Function Calls
function sum(x, y, z) {
    return x + y + z;
}
const numbersToSum = [1, 2, 3];
console.log(sum(...numbersToSum)); // Output: 6

// In this example, we have demonstrated how to use destructuring to extract values from objects and arrays, and how to use the spread syntax to create new arrays and objects, as well as to pass elements of an array as arguments to a function.

// Note: Destructuring and spread syntax are powerful features in JavaScript that can help you write cleaner and more concise code. They are widely used in modern JavaScript development, especially in frameworks like React and Vue.js.

// Rest/spread operator 
// The rest operator is used to collect all remaining elements into an array. It is denoted by three dots (...). The rest operator can be used in function parameters to gather all remaining arguments into an array.

function myFunction(a, b, ...rest) {
    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(rest); // Output: [3, 4, 5]
}
myFunction(1, 2, 3, 4, 5);

// The rest operator can also be used in array destructuring to collect the remaining elements into an array.
const [first, second, ...restOfNumbers] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2   
console.log(restOfNumbers); // Output: [3, 4, 5]

// In this example, we have used the rest operator to collect the remaining arguments in a function and to collect the remaining elements in an array destructuring assignment. The rest operator is a powerful tool for handling variable numbers of arguments and for working with arrays in JavaScript.

// In summary, destructuring and spread syntax are essential features in JavaScript that allow you to work with objects and arrays more efficiently. They help you write cleaner and more readable code, making it easier to manage data structures and function arguments.