// Operations are the basic building blocks of any programming language. They allow us to manipulate data and perform various tasks. In JavaScript, there are several types of operations, including:

// 1. Arithmetic operations
const a = 10;
const b = 5;
const sum = a + b; // Addition
const difference = a - b; // Subtraction
const product = a * b; // Multiplication
const quotient = a / b; // Division
const remainder = a % b; // Modulus
console.log(sum); // 15
console.log(difference); // 5
console.log(product); // 50
console.log(quotient); // 2
console.log(remainder); // 0

// 2. Comparison operations
const x = 10;
const y = 5;
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(x === y); // false
console.log(x !== y); // true   

// 3. Logical operations
const p = true;
const q = false;
console.log(p && q); // false
console.log(p || q); // true
console.log(!p); // false
console.log(!q); // true

// 4. Assignment operations
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15
c -= 5; // c = c - 5
console.log(c); // 10
c *= 5; // c = c * 5
console.log(c); // 50
c /= 5; // c = c / 5
console.log(c); // 10
c %= 3; // c = c % 3
console.log(c); // 1    

// 5. String operations
const str1 = "Hello";
const str2 = "World";
const greeting = str1 + " " + str2; // Concatenation
console.log(greeting); // Hello World
const length = greeting.length; // Length of the string
console.log(length); // 11
const upperCaseGreeting = greeting.toUpperCase(); // Convert to uppercase
console.log(upperCaseGreeting); // HELLO WORLD
const lowerCaseGreeting = greeting.toLowerCase(); // Convert to lowercase
console.log(lowerCaseGreeting); // hello world
const substring = greeting.substring(0, 5); // Get a substring
console.log(substring); // Hello  
  
// 6. Ternary operator
const age2 = 18;
const isAdult = age2 >= 18 ? "Yes" : "No"; // If age2 is greater than or equal to 18, isAdult will be "Yes", otherwise it will be "No"
console.log(isAdult); // Yes

// 7. Type coercion
const num = 10;
const str = "20";
const result = num + str; // The number 10 will be coerced to a string and concatenated with "20"
console.log(result); // "1020"  

// These are some of the basic operations in JavaScript. There are many more operations and operators available, but these are the most commonly used ones. Understanding these operations is essential for writing effective JavaScript code.      



