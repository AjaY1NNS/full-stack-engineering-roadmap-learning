// 1. Call Stack
function first() {
    console.log("First function.");
    second();
}
function second() {
    console.log("Second function.");
    third();
}
function third() {
    console.log("Third function.");
}
first();
// Output:
// First function.
// Second function.
// Third function.

// LIFO structure
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

// 2. Function invocation flow explained
function x() {
    console.log("Function X");
    y();
}
function y() {
    console.log("Function Y");
    z();
}
function z() {
    console.log("Function Z");
}
x();
// Output:
// Function X
// Function Y
// Function Z

// 3. Stack overflow explained
function recursiveFunction() {
    console.log("This function calls itself.");
    recursiveFunction();
}
// Uncommenting the line below will cause a stack overflow error
// recursiveFunction();
// Output:
// This function calls itself.
// This function calls itself.
// ... (repeated until stack overflow occurs)