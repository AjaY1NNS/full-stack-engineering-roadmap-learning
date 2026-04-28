// hoisting/***********************/
// 1. var declarations are hoisted and initialized with undefined
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// 2. function declarations are hoisted and initialized with the function definition
hoistedFunction(); // I am a hoisted function
function hoistedFunction() {
  console.log("I am a hoisted function");
}

// 3. let and const declarations are hoisted but not initialized (temporal dead zone)
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 20;
// console.log(c); // Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 30;

// 4. function expressions and arrow functions are not hoisted
// console.log(notHoistedFunction); // undefined
var notHoistedFunction = function() {
    console.log("I am not hoisted");    
};
// notHoistedFunction(); // Uncaught TypeError: notHoistedFunction is not a function
// console.log(notHoistedArrowFunction); // undefined
var notHoistedArrowFunction = () => {
    console.log("I am not hoisted either");
};
// notHoistedArrowFunction(); // Uncaught TypeError: notHoistedArrowFunction is not a function

// 5. Hoisting with var can lead to unexpected behavior
function hoistingWithVar() {
    console.log(x); // undefined (x is hoisted but not initialized)
    var x = 5;
    console.log(x); // 5
}
hoistingWithVar();

// 6. Hoisting with let and const can lead to temporal dead zone errors : Temporal Dead Zone (TDZ)
function hoistingWithLetConst() {
    // console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    console.log(y); // 10
    // console.log(z); // Uncaught ReferenceError: Cannot access 'z' before initialization
    const z = 15;
    console.log(z); // 15
}
hoistingWithLetConst();

// 7. Hoisting with function declarations can lead to unexpected behavior   
function hoistingWithFunctionDeclarations() {
    hoisted(); // I am hoisted (function declaration is hoisted)
    notHoisted(); // Uncaught TypeError: notHoisted is not a function (function expression is not hoisted)
    function hoisted() {
        console.log("I am hoisted");
    }   
    var notHoisted = function() {
        console.log("I am not hoisted");
    }
}
hoistingWithFunctionDeclarations();

// 8. Best practices to avoid hoisting issues
// - Always declare variables at the top of their scope
// - Use let and const instead of var to avoid hoisting issues
// - Avoid using function expressions and arrow functions before they are defined

// Example of best practices to avoid hoisting issues
function bestPractices() {
    // Declare variables at the top of the scope
    let x = 10;
    const y = 20;
    // Use function declarations instead of function expressions
    function declaredFunction() {
        console.log("I am a declared function");
    }
    declaredFunction(); // I am a declared function
    // Avoid using function expressions and arrow functions before they are defined
    // notDeclaredFunction(); // Uncaught ReferenceError: Cannot access 'notDeclaredFunction' before initialization
    const notDeclaredFunction = () => {
        console.log("I am not declared");
    }
    notDeclaredFunction(); // I am not declared
}
bestPractices();
