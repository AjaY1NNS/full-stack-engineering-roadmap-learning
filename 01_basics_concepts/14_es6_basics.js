// ES6 + Basics Concepts

// 1. let and const
let x = 10; // block-scoped variable
const y = 20; // block-scoped constant
// x = 15; // Allowed (x can be reassigned)
// y = 25; // Uncaught TypeError: Assignment to constant variable (y cannot be reassigned)  
// 2. Arrow functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // Hello, Alice!
// 3. Template literals
const name = "Bob";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // My name is Bob and I am 30 years old.
// 4. Destructuring assignment
const person = { name: "Charlie", age: 25 };
const { name: personName, age: personAge } = person;
console.log(personName); // Charlie
console.log(personAge); // 25
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
// 5. Default parameters
function greet2(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet2()); // Hello, Guest! (default parameter is used)
console.log(greet2("Dave")); // Hello, Dave! (provided argument is used)
// 6. Rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6 (sum of all arguments)
console.log(sum(4, 5)); // 9 (sum of all arguments)
// 7. Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }
// 8. Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}   
const person1 = new Person("Eve", 28);
console.log(person1.name); // Eve
console.log(person1.age); // 28 

// 9. Modules (ES6 modules are not supported in all environments, but here is an example of how they work)
// In file math.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
// In another file (e.g., main.js)
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2   

// Template literals, destructuring, and other ES6 features can be used in various contexts, such as function parameters, object properties, and array elements, making the code more concise and easier to read. The introduction of classes and modules also helps in organizing code and promoting better software design patterns.
// Default Parameters and Rest Parameters can be used in functions to provide default values for parameters and to handle an arbitrary number of arguments, respectively. The Spread Operator allows for easy manipulation of arrays and objects, making it simpler to combine or copy them. Overall, ES6 introduced many powerful features that enhance the capabilities of JavaScript and improve the developer experience.