// Timing functions
// Timing functions allow you to execute code after a certain delay or at regular intervals.
// 1. setTimeout
function sayHello() {
    console.log("Hello, world!");
}
setTimeout(sayHello, 2000); // Logs "Hello, world!" after 2 seconds
// 2. setInterval
let count = 0;
const intervalId = setInterval(function() {
    count++;
    console.log("Count:", count);
    if (count >= 5) {
        clearInterval(intervalId); // Stop the interval after 5 counts
    }
}, 1000); // Logs "Count: 1", "Count: 2", ..., "Count: 5" every second
// 3. clearTimeout
const timeoutId = setTimeout(function() {
    console.log("This will not be logged");
}, 3000);
clearTimeout(timeoutId); // Cancels the timeout, so the function will not be executed
// 4. clearInterval
const anotherIntervalId = setInterval(function() {
    console.log("This will not be logged");
}, 1000);
clearInterval(anotherIntervalId); // Cancels the interval, so the function will not be executed
// 5. Timing functions with arguments
function greet(name) {
    console.log("Hello, " + name + "!");
}
setTimeout(greet, 2000, "Alice"); // Logs "Hello, Alice!" after 2 seconds
// 6. Timing functions with anonymous functions
setTimeout(function() { 
    console.log("This is an anonymous function executed after 2 seconds");
}, 2000); // Logs the message after 2 seconds
setInterval(function() {
    console.log("This is an anonymous function executed every 3 seconds");
}, 3000); // Logs the message every 3 seconds
