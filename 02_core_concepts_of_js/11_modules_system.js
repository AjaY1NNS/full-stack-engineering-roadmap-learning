//  Modules System
// 1. Modules are reusable pieces of code that can be imported and exported between different files in JavaScript.
// 2. Modules help to organize code and promote code reusability by allowing developers to break down their code into smaller, more manageable pieces.
// 3. In JavaScript, there are two main module systems: CommonJS and ES6 modules.
// CommonJS is the module system used in Node.js, while ES6 modules are the standard module system for JavaScript in the browser and in modern JavaScript environments.
// CommonJS modules use the require() function to import modules and the module.exports object to export modules. For example:
// math.js
function add(a, b) {
    return a + b;
}
module.exports = { add };
// main.js
const math = require('./math');
console.log(math.add(2, 3));
// ES6 modules use the import and export keywords to import and export modules. For example:
// math.js
export function add(a, b) {
    return a + b;
}
// main.js
import { add } from './math.js';
console.log(add(2, 3));
// In summary, the modules system in JavaScript allows developers to organize their code into reusable pieces that can be imported and exported between different files. CommonJS is used in Node.js, while ES6 modules are the standard for modern JavaScript development. Understanding how to use modules effectively can help you write cleaner, more maintainable code and promote code reusability in your applications.

