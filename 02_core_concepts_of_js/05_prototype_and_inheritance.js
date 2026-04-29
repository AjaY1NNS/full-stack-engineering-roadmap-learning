// Prototypes & Inheritance
// Every object in JavaScript has a prototype. A prototype is also an object. All objects inherit their properties and methods from their prototype.
// 1. Prototypal Inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};
const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice
// 2. Prototype Chain
function Employee(name, age, position) {
    Person.call(this, name, age); // Inherit properties from Person
    this.position = position;
}
Employee.prototype = Object.create(Person.prototype); // Inherit methods from Person
Employee.prototype.constructor = Employee;
Employee.prototype.work = function() {
    console.log(this.name + " is working as a " + this.position);
};
const employee1 = new Employee("Bob", 25, "Developer");
employee1.greet(); // Hello, my name is Bob
employee1.work(); // Bob is working as a Developer
// 3. Object.create for Inheritance
const animal = {
    type: "Animal",
    sound: function() {
        console.log("Some sound");
    }
};
const dog = Object.create(animal);
dog.type = "Dog";
dog.sound(); // Some sound
// 4. ES6 Classes and Inheritance
class PersonClass {
    constructor(name, age) {    
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }   
}
class EmployeeClass extends PersonClass {
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }
    work() {
        console.log(this.name + " is working as a " + this.position);
    }
}
const employee2 = new EmployeeClass("Charlie", 28, "Designer");
employee2.greet(); // Hello, my name is Charlie
employee2.work(); // Charlie is working as a Designer
// In this example, we have defined a Person constructor function and an Employee constructor function that inherits from Person. We also used Object.create to create a dog object that inherits from the animal object. Finally, we defined ES6 classes for Person and Employee, demonstrating how to use class syntax for inheritance in JavaScript.

// 5. __proto__ and prototype
// The __proto__ property is a reference to the prototype of an object. It is used to access the properties and methods of the prototype.
console.log(employee1.__proto__); // Employee.prototype
console.log(employee1.__proto__.__proto__); // Person.prototype
console.log(employee1.__proto__.__proto__.__proto__); // Object.prototype
// In this example, we can see that employee1's __proto__ points to Employee.prototype, which in turn points to Person.prototype, and finally to Object.prototype. This illustrates the prototype chain in JavaScript.  
