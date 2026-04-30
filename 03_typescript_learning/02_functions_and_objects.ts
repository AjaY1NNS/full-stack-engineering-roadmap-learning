//  Functions & Objects
// 1. Functions Types
// TypeScript allows you to specify the types of function parameters and return values. This helps catch errors and improves code readability.
function add(a: number, b: number): number {
    return a + b;
}
let result: number = add(5, 10);
// 2. Optional and Default Parameters
// You can define optional parameters using the '?' syntax and provide default values for parameters.
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// 3. Rest Parameters
// Rest parameters allow you to represent an indefinite number of arguments as an array.
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 4. Object Types
// You can define the shape of an object using interfaces or type aliases.
interface User {
    id: string;
    name: string;
    age: number;
    email?: string; // Optional property
}

let user1: User = {
    id: "12345",
    name: "Alice",
    age: 30,
};

// 5. Readonly Properties
// You can use the 'readonly' modifier to make properties of an object immutable.
interface Point {
    readonly x: number;
    readonly y: number;
}
let point: Point = { x: 10, y: 20 };
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.
// 6. Index Signatures
// Index signatures allow you to define the type of properties that are not known in advance.
interface StringDictionary {
    [key: string]: string;
}
let myDictionary: StringDictionary = {
    "key1": "value1",
    "key2": "value2"
};

// 7. Type aliases (type)
// Type aliases allow you to create a new name for a type. They can be used to simplify complex types or to create more readable code.
type UserId = string;
type UserName = string;
type UserAge = number;

interface User {
    id: UserId;
    name: UserName;
    age: UserAge;
}


// 8. Interfaces (interface)
// Interfaces define the structure of an object. They can be used to describe the shape of data and enforce type safety.
interface Product {
    id: number;
    name: string;
    price: number;
}
let product1: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99
};

// 9. Difference between type and interface
// Both 'type' and 'interface' can be used to define the shape of an object, but there are some differences:
// - 'interface' can be extended or implemented by classes, while 'type' cannot.
// - 'type' can represent more complex types (e.g., union types, intersection types), while 'interface' is limited to object shapes.
// - 'interface' can be merged (declaration merging), while 'type' cannot.

// example of extending an interface
interface Animal {
    name: string;
    age: number;
}
interface Dog extends Animal {
    breed: string;
}
let myDog: Dog = {
    name: "Buddy",
    age: 5,
    breed: "Golden Retriever"
};

// example of union type with type alias
type Status = "success" | "error" | "loading";
function getStatusMessage(status: Status): string {
    switch (status) {
        case "success":
            return "Operation was successful!";
        case "error":
            return "An error occurred.";
        case "loading":
            return "Loading...";
    }   
}

// example of type and interface 
type Point2D = {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}

// explain the difference between type and interface
// The main difference between 'type' and 'interface' in TypeScript is that 'interface' can be extended or implemented by classes, while 'type' cannot. 
// Additionally, 'type' can represent more complex types (e.g., union types, intersection types), while 'interface' is limited to object shapes. 
// Finally, 'interface' can be merged (declaration merging), while 'type' cannot.


