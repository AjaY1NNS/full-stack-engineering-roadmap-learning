// Closures are a fundamental concept in JavaScript that allows functions to access variables from their outer scope even after the outer function has finished executing. This is achieved through the use of lexical scoping, where a function retains access to the variables of its parent scope.

// 1. Basic Closure Example
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer variable:", outerVariable);
        console.log("Inner variable:", innerVariable);
    }
}
const closureExample = outerFunction("I am from the outer function");
closureExample("I am from the inner function");
// Output:
// Outer variable: I am from the outer function
// Inner variable: I am from the inner function
// 2. Closure with private variables
function createCounter() {
    let count = 0; // count is a private variable
    return function() {
        count++;
        console.log("Count:", count);
    }   
}
const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
// 3. Closure with setTimeout
function delayedGreeting(name) {
    setTimeout(function() {
        console.log("Hello, " + name + "!");
    }, 1000);
}
delayedGreeting("Alice"); // Hello, Alice! (after 1 second)
// 4. Closure with event listeners
function setupButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", function() {
        console.log("Button " + buttonId + " clicked!");
    });
}
setupButton("myButton");
// When the button with id "myButton" is clicked, it will log "Button myButton clicked!" to the console, demonstrating that the event listener has access to the buttonId variable through closure.
// 5. Closure with loops and var
function createFunctions() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}
const funcs = createFunctions();
funcs[0](); // 3
funcs[1](); // 3    
funcs[2](); // 3
// This happens because the variable i is shared across all iterations of the loop, and by the time the functions are called, i has been incremented to 3. To fix this, we can use let instead of var, which creates a new scope for each iteration of the loop.
// 6. Closure with loops and let
function createFunctionsWithLet() {
    const functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}
const funcsWithLet = createFunctionsWithLet();
funcsWithLet[0](); // 0
funcsWithLet[1](); // 1
funcsWithLet[2](); // 2
// In this case, each function retains access to its own copy of the variable i, which is why it logs the expected values.  
// 7. Closure with modules
const CounterModule = (function() {
    let count = 0; // private variable  
    function increment() {
        count++;
        console.log("Count:", count);
    }   
    function decrement() {
        count--;
        console.log("Count:", count);
    }
    return {
        increment,
        decrement
    };
})();
CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2
CounterModule.decrement(); // Count: 1
// In this example, the CounterModule is an IIFE (Immediately Invoked Function Expression) that creates a private scope for the count variable. The increment and decrement functions have access to this variable through closure, allowing us to manipulate the count without exposing it directly to the outside world.  
// 8. Closure with recursion
function factorial(n) {
    if (n === 0) {  
        return 1;
    }   
    return n * factorial(n - 1);
}   
console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
// In this example, the factorial function is recursive and uses closure to access the variable n in each recursive call. Each call to factorial creates a new execution context, but they all have access to the variable n through closure, allowing the function to compute the factorial correctly. 
// 9. Closure with asynchronous code
function fetchData(callback) {
    setTimeout(() => {  
        const data = { id: 1, name: "John Doe" };
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log("Data received:", data);
}); // Data received: { id: 1, name: "John Doe" } (after 1 second)
// In this example, the callback function passed to fetchData has access to the data variable through closure, even though the data is fetched asynchronously. When the data is received after 1 second, the callback function can still access it and log it to the console.   
// 10. Closure with private methods
function Person(name) {
    let age = 0; // private variable    
    function getAge() { // private method
        return age;
    }   
    function haveBirthday() { // public method
        age++;
        console.log(name + " is now " + age + " years old.");
    }
    return {
        haveBirthday
    };
}   
const person = Person("Alice");
person.haveBirthday(); // Alice is now 1 years old.
person.haveBirthday(); // Alice is now 2 years old.
// In this example, the Person function creates a private variable age and a private method getAge. The haveBirthday method is public and can access the age variable through closure, allowing it to update and log the person's age without exposing the age variable directly.   

