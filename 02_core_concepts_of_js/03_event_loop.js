// Event Loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser's APIs and then executing them when they are ready.

// The Event Loop works in conjunction with the Call Stack and the Task Queue (or Callback Queue).

// 1. Call Stack and Task Queue
// The Call Stack is where JavaScript keeps track of function calls. When a function is called, it is added to the Call Stack. When the function finishes executing, it is removed from the Call Stack.
// The Task Queue is where asynchronous tasks (like setTimeout, Promises, etc.) are placed when they are ready to be executed. The Event Loop continuously checks the Call Stack and the Task Queue. If the Call Stack is empty, it takes the first task from the Task Queue and pushes it onto the Call Stack for execution.

// 2. Example of Event Loop in action
console.log("Start");
setTimeout(function() {
    console.log("This is from setTimeout");
}, 0);
console.log("End");
// Output:
// Start
// End
// This is from setTimeout
// In this example, even though the setTimeout is set to 0 milliseconds, it will still be executed after the synchronous code (console.log("End")) because it is placed in the Task Queue and will only be executed once the Call Stack is empty.   

// 3. Promises and Event Loop
console.log("Start");
Promise.resolve().then(function() {
    console.log("This is from Promise");
});
console.log("End");
// Output:
// Start
// End
// This is from Promise
// Similar to setTimeout, the .then() callback of a Promise is also placed in the Task Queue and will be executed after the synchronous code has finished executing.

// Single-threaded nature of JS
// JavaScript is single-threaded, meaning it can only execute one task at a time. The Event Loop allows it to handle asynchronous operations without blocking the execution of other code.

// Call stack 
// The Call Stack is a data structure that keeps track of the function calls in a program. When a function is called, it is added to the top of the Call Stack. When the function finishes executing, it is removed from the Call Stack. If a function calls another function, the new function is added to the top of the Call Stack, and this process continues until all functions have finished executing.

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
// In this example, the functions are executed in a synchronous manner, and the Call Stack is used to keep track of the function calls. The Event Loop will only come into play when there are asynchronous tasks to handle, such as setTimeout or Promises.

// Callback queue 
// The callback queue is where the callbacks from asynchronous operations are placed when they are ready to be executed. The Event Loop continuously checks the Call Stack and the Callback Queue. If the Call Stack is empty, it takes the first callback from the Callback Queue and pushes it onto the Call Stack for execution.

// Example of callback queue
console.log("Start");
setTimeout(function() {
    console.log("This is from setTimeout");
}, 1000);
console.log("End");
// Output:
// Start
// End
// This is from setTimeout (after 1 second)
// In this example, the setTimeout callback is placed in the Callback Queue after 1 second. The Event Loop will execute it only after the synchronous code (console.log("End")) has finished executing and the Call Stack is empty.

// Microtask queue
// The microtask queue is a special queue that has higher priority than the callback queue. It is used for tasks that need to be executed immediately after the currently executing code, such as Promise callbacks and MutationObserver callbacks. The Event Loop checks the microtask queue before the callback queue, ensuring that microtasks are executed before any other tasks in the callback queue.

// Example of microtask queue
console.log("Start");
Promise.resolve().then(function() {
    console.log("This is from Promise");
});
setTimeout(function() {
    console.log("This is from setTimeout");
}, 0);
console.log("End");
// Output:
// Start
// End
// This is from Promise
// This is from setTimeout
// In this example, the Promise callback is executed before the setTimeout callback, even though the setTimeout is set to 0 milliseconds, because the Promise callback is placed in the microtask queue, which has higher priority than the callback queue.
