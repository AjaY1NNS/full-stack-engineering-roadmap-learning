// this keyword refers to the current object that is executing the code. It can be used to access properties and methods of the current object.
// 1. this in a method
const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // Hello, my name is Alice
// In this example, the this keyword inside the greet method refers to the person object, allowing us to access the name property of that object.
// 2. this in a constructor function
function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log("Hi, I'm " + this.name);
    };
}
const person2 = new Person("Bob");
person2.greet(); // Hi, I'm Bob
// In this example, the this keyword inside the Person constructor function refers to the new object being created (person2), allowing us to set the name property and define the greet method for that object.
// 3. this in a regular function
function showThis() {
    console.log(this);
}
showThis(); // In a browser, this will log the Window object; in Node.js, it will log the global object
// In this example, the this keyword in the showThis function refers to the global object (Window in browsers or global in Node.js) because it is called as a regular function, not as a method of an object.
// 4. this in an arrow function
const arrowFunction = () => {
    console.log(this);
}
arrowFunction(); // In a browser, this will log the Window object; in Node.js, it will log the global object
// In this example, the this keyword in the arrowFunction refers to the surrounding context, which is the global object in this case. Arrow functions do not have their own this value; instead, they inherit it from the enclosing scope.
// 5. this with call, apply, and bind
function greet() {
    console.log("Hello, " + this.name);
}
const person3 = { name: "Charlie" };
greet.call(person3); // Hello, Charlie
greet.apply(person3); // Hello, Charlie
const boundGreet = greet.bind(person3);
boundGreet(); // Hello, Charlie
// In this example, we use call and apply to invoke the greet function with person3 as the this value, allowing us to access the name property of person3. We also use bind to create a new function (boundGreet) that has its this value permanently set to person3, so when we call boundGreet, it also logs "Hello, Charlie".    
// 6. this in event handlers (in a browser environment)
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);
button.addEventListener("click", function() {
    console.log(this); // this will refer to the button element that was clicked
});
// In this example, the this keyword inside the event handler function refers to the button element that was clicked, allowing us to access its properties and methods if needed.

// Behavior in : normal funcation and arrow funcation
const obj = {
    name: "Dave",
    regularFunction: function() {
        console.log("Regular function this:", this); // this refers to obj
    },
    arrowFunction: () => {
        console.log("Arrow function this:", this); // this refers to the surrounding context (global object)
    }
};
obj.regularFunction(); // Regular function this: { name: "Dave", regularFunction: [Function], arrowFunction: [Function] }
obj.arrowFunction(); // Arrow function this: Window (in a browser) or global (in Node.js)
// In this example, the regularFunction's this refers to the obj object, while the arrowFunction's this refers to the surrounding context, which is the global object. This illustrates how the behavior of this differs between regular functions and arrow functions. 