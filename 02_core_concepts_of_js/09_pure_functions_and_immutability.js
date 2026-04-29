// Pure Functions & Immutability

// Pure Functions
// A pure function is a function that always produces the same output for the same input and has no side effects. This means that a pure function does not modify any external state or variables and does not rely on any external state or variables. Pure functions are easier to test, debug, and reason about because they are predictable and do not have hidden dependencies.
function add(a, b) {
    return a + b; // This function is pure because it always returns the same output for the same input and has no side effects.
}
console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5
// Impure Function Example
let counter = 0;
function increment() {
    counter++; // This function is impure because it modifies the external variable 'counter' and does not always produce the same output for the same input.
    return counter;
}

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
// Immutability
// Immutability is the concept of not changing data after it has been created. In JavaScript, objects and arrays are mutable, which means that their properties and elements can be changed. However, you can create immutable data structures by using techniques such as Object.freeze() or by using libraries like Immutable.js.
const obj6 = {
    name: "Hank",
    age: 45
};
Object.freeze(obj6);
obj6.name = "Ivy"; // This will not change the name property because the object is frozen.
console.log(obj6.name); // Output: Hank
// In this example, we used Object.freeze() to make the obj6 object immutable. After freezing the object, any attempts to modify its properties will not have any effect, and the original values will remain unchanged. This is a useful technique for ensuring that data remains consistent and prevents unintended side effects in your code.

