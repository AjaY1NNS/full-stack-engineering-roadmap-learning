// Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a programming language. It allows developers to control the flow of their code based on certain conditions or loops. Here are some common control flow statements in JavaScript:

// if statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// if-else if statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}   
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while loop
let j = 0;  
while (j < 5) {
  console.log(j);
  j++;
}
// do-while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
// break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {    break; // Exit the loop when i is 5
  }
    console.log(i);
}
// continue statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the rest of the loop when i is 5
  }
  console.log(i);
}
// for...in loop (used for iterating over object properties)
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// for...of loop (used for iterating over iterable objects like arrays)
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
// forEach method (used for iterating over arrays)
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
