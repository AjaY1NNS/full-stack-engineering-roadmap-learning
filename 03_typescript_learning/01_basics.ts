// Typescript Basics

// 1. Introduction to TypeScript
// TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. 
// It adds optional static typing, classes, and interfaces to JavaScript, making it easier to write and maintain large-scale applications.

// 2. Type annotations
// Type annotations allow you to specify the types of variables, function parameters, and return values. This helps catch errors at compile time and improves code readability.

let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;


// 3. Basic types
// TypeScript provides several basic types, including string, number, boolean, null, undefined, and any.
let _name: string = "Alice";
let age: number = 30;
let isStudent: boolean = false;
let unknownValue: any = "This can be any type";

// 4. Arrays and tuples
// TypeScript allows you to define arrays and tuples with specific types.
let numbers: number[] = [1, 2, 3, 4, 5];
let person: [string, number] = ["Alice", 30];

// 5. Enums
// Enums are a way to define a set of named constants. They can be numeric or string-based.
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;

// 6. Type Interfaces
// Interfaces define the structure of an object. They can be used to describe the shape of data and enforce type safety.
interface Person {
    name: string;
    age: number;
}
let person1: Person = {
    name: "Bob",
    age: 25
};

