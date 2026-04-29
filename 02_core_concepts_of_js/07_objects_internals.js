// Objects Internals
// In JavaScript, objects are a fundamental data structure that allows you to store and manipulate data in a structured way. Understanding the internals of objects can help you write more efficient and effective code. Here are some key concepts related to JavaScript objects:

// 1. Object Creation
// You can create objects using object literals, constructor functions, or the Object.create() method.
// Object Literal
const obj1 = {
    name: "Alice",
    age: 30
};

// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Bob", 25);

// Object.create()
const obj2 = Object.create(obj1);
obj2.name = "Charlie";
obj2.age = 28;
// 2. Object Properties
// Objects can have properties that store values. You can access and modify these properties using dot notation or bracket notation.
console.log(obj1.name); // Output: Alice
console.log(obj1["age"]); // Output: 30
obj1.name = "Eve";
console.log(obj1.name); // Output: Eve
// 3. Object Methods
// Objects can also have methods, which are functions that operate on the object's properties.
const obj3 = {
    name: "Dave",
    age: 35,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
obj3.greet(); // Output: Hello, my name is Dave
// 4. Prototypes and Inheritance
// Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from. This allows for a powerful inheritance mechanism in JavaScript.
const obj4 = Object.create(obj3);
obj4.name = "Eve";
obj4.greet(); // Output: Hello, my name is Eve
// In this example, obj4 inherits the greet method from obj3 through the prototype chain. When we call obj4.greet(), it looks for the greet method on obj4 first, and if it doesn't find it, it looks up the prototype chain to obj3 where it finds the method and executes it.
// 5. __proto__ and prototype
// The __proto__ property is a reference to the prototype of an object. It is used internally by JavaScript to implement inheritance. The prototype property is used to define properties and methods that should be inherited by all instances of a constructor function.
console.log(obj4.__proto__ === obj3); // Output: true
console.log(Person.prototype); // Output: { greet: [Function] }
// In this example, we can see that obj4's __proto__ points to obj3, which means that obj4 inherits from obj3. We can also see that the Person constructor function has a prototype property that contains the greet method, which can be inherited by any instance of Person.
// In summary, understanding the internals of JavaScript objects, including how they are created, how properties and methods work, and how prototypes and inheritance function, is essential for writing effective JavaScript code. This knowledge allows you to leverage the full power of objects in your applications.

// Object mutability
// In JavaScript, objects are mutable, which means that their properties can be changed after they have been created. This is an important concept to understand when working with objects, as it can lead to unintended side effects if not handled carefully.
const obj5 = {
    name: "Frank",
    age: 40
};
console.log(obj5.name); // Output: Frank
obj5.name = "Grace";    
console.log(obj5.name); // Output: Grace
// In this example, we have an object obj5 with a name property. We can change the value of the name property from "Frank" to "Grace" because objects in JavaScript are mutable. This mutability allows us to modify objects as needed, but it also means that we need to be cautious when sharing objects between different parts of our code, as changes to one reference can affect all references to that object.
// To avoid unintended side effects, you can create a copy of an object before modifying it. This can be done using the spread operator or Object.assign() method.
const obj6 = { ...obj5 }; // Using spread operator
obj6.name = "Hank";
console.log(obj5.name); // Output: Grace
console.log(obj6.name); // Output: Hank
const obj7 = Object.assign({}, obj5); // Using Object.assign()
obj7.name = "Ivy";
console.log(obj5.name); // Output: Grace
console.log(obj7.name); // Output: Ivy
// In this example, we created a copy of obj5 using both the spread operator and Object.assign(). By modifying the name property of the copied objects (obj6 and obj7), we can see that the original object (obj5) remains unchanged. This is a common practice to ensure that we do not accidentally modify shared objects in our code.    

// Shallow vs deep copy
// When copying objects, it's important to understand the difference between shallow and deep copies. 
// A shallow copy creates a new object but does not create copies of nested objects,
// while a deep copy creates a new object and also recursively copies all nested objects.

const obj8 = {
    name: "Jack",
    age: 45,
    address: {
        city: "Los Angeles",
        state: "CA"
    }
};
// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, obj8);
shallowCopy.name = "Karen";
shallowCopy.address.city = "San Francisco";
console.log(obj8.name); // Output: Jack
console.log(obj8.address.city); // Output: San Francisco
// In this example, we created a shallow copy of obj8 using Object.assign(). When we change the name property of the shallow copy, it does not affect the original object. However, when we change the city property of the nested address object, it does affect the original object because the nested object is shared between the original and the shallow copy.    

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(obj8));
deepCopy.name = "Leo";
deepCopy.address.city = "Seattle";
console.log(obj8.name); // Output: Jack
console.log(obj8.address.city); // Output: San Francisco
// In this example, we created a deep copy of obj8 using JSON.parse() and JSON.stringify(). When we change the name property and the city property of the deep copy, it does not affect the original object because all nested objects are also copied. This is a common technique for creating deep copies of objects in JavaScript, although it has limitations (e.g., it does not work with functions or special object types like Date).    
// In summary, understanding the mutability of objects and the difference between shallow and deep copies is crucial when working with objects in JavaScript. It helps you manage data effectively and avoid unintended side effects in your code.
