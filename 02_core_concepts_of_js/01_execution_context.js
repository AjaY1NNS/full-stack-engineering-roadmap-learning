// Execution Context 

// Global Execution Context
console.log("This is the global execution context.");
// Output:
// This is the global execution context.

// Function Execution Context
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Hello, Alice!
// Output:
// This is the global execution context.
// Hello, Alice!

// Nested Function Execution Context
function outerFunction() {
    console.log("This is the outer function.");
    function innerFunction() {
        console.log("This is the inner function.");
    }
    innerFunction();
}
outerFunction();
// Output:
// This is the outer function.
// This is the inner function.

// Execution Context Stack (Call Stack behavior)

function firstFunction() {
    console.log("First function.");
    secondFunction();
}
function secondFunction() {
    console.log("Second function.");
    thirdFunction();
}
function thirdFunction() {
    console.log("Third function.");
}
firstFunction();
// Output:
// First function.
// Second function.
// Third function.

// Call Stack behavior
function a() {
    console.log("Function A");
    b();
}
function b() {
    console.log("Function B");
    c();
}
function c() {
    console.log("Function C");
}
a();
// Output:
// Function A
// Function B
// Function C