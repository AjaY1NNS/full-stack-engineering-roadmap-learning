// Objects are collections of key-value pairs. They are used to store and organize data in a structured way.
// 1. Object literal
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name); // Alice
console.log(person.age); // 30
person.greet(); // Hello, my name is Alice  
// 2. Object constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hi, I'm " + this.name);
    };
}
const person2 = new Person("Bob", 25);
console.log(person2.name); // Bob
console.log(person2.age); // 25
person2.greet(); // Hi, I'm Bob
// 3. Object.create 
const animal = {
    type: "Animal",
    sound: function() {
        console.log("Some sound");
    }
};
const dog = Object.create(animal);
dog.type = "Dog";
dog.sound = function() {
    console.log("Woof!");
}
console.log(dog.type); // Dog
dog.sound(); // Woof!
// 4. Object with nested objects
const company = {
    name: "Tech Co.",
    employees: {
        employee1: {
            name: "Charlie",
            position: "Developer"
        },
        employee2: {
            name: "Dave",
            position: "Designer"
        }
    }
};
console.log(company.name); // Tech Co.
console.log(company.employees.employee1.name); // Charlie
console.log(company.employees.employee2.position); // Designer
// 5. Object with methods
const calculator = {    
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;   
    },  
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }

};
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15
console.log(calculator.divide(5, 3)); // 1.6666666666666667 
console.log(calculator.divide(5, 0)); // Cannot divide by zero
// 6. Object with getters and setters
const user = {  
    firstName: "Eve",
    lastName: "Smith",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }   
};
console.log(user.fullName); // Eve Smith
user.fullName = "Frank Johnson";
console.log(user.firstName); // Frank
console.log(user.lastName); // Johnson  
// 7. Object with computed property names
const propName = "dynamicProperty";
const dynamicObject = { 
    [propName]: "I am a dynamic property"
};
console.log(dynamicObject.dynamicProperty); // I am a dynamic property  
// 8. Object with methods using this
const person3 = {
    name: "Grace",
    age: 28,    
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};
person3.greet(); // Hello, my name is Grace and I am 28 years old.
// 9. Object with method chaining
const chainableObject = {
    value: 0,   
    add: function(num) {
        this.value += num;
        return this; // Return the object to allow chaining
    },
    subtract: function(num) {
        this.value -= num;  
        return this; // Return the object to allow chaining
    },
    getValue: function() {
        return this.value;
    }
};
chainableObject.add(5).subtract(2).add(3);
console.log(chainableObject.getValue()); // 6 (0 + 5 - 2 + 3)
// 10. Object with nested methods
const nestedObject = {
    name: "Nested Object",
    nested: {
        greet: function() {
            console.log("Hello from the nested object!");
        }
    }
};
nestedObject.nested.greet(); // Hello from the nested object!   

