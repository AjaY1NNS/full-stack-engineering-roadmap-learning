// In JavaScript we have only these are the variables declared: var, let, and const

const name = "John"; // This is a constant variable, it cannot be reassigned
let age = 30; // This is a variable that can be reassigned
var city = "New York"; // This is a variable that can be reassigned, but it is function-scoped

// Data types in JavaScript
// 1. Primitive data types
const string = "Hello, World!"; // String
const number = 42; // Number
const boolean = true; // Boolean
const nullValue = null; // Null
const undefinedValue = undefined; // Undefined
const symbol = Symbol("unique"); // Symbol // Symbol is a unique and immutable data type

// 2. Non-primitive data types
const object = { name: "John", age: 30 }; // Object
const array = [1, 2, 3]; // Array
const date = new Date(); // Date // Date is a built-in object that represents a single moment in time

// You can also use the typeof operator to check the data type of a variable
console.log(typeof string); // string
console.log(typeof number); // number
console.log(typeof boolean); // boolean
console.log(typeof nullValue); // object
console.log(typeof undefinedValue); // undefined
console.log(typeof symbol); // symbol
console.log(typeof object); // object
console.log(typeof array); // object
console.log(typeof date); // object