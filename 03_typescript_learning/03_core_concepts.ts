// Core Conccepts in TypeScript

// 1. Type Inference
// TypeScript can automatically infer the types of variables based on their initial values. This means that you don't always need to explicitly annotate types.

let inferredString = "This is a string"; // TypeScript infers this as a string
let inferredNumber = 42; // TypeScript infers this as a number

// 2. Union Types
// Union types allow a variable to hold more than one type. You can use the '|' operator to define a union type.
let unionVariable: string | number = "This is a string";
unionVariable = 42; // Valid
// 3. Intersection Types
// Intersection types allow you to combine multiple types into one. You can use the '&' operator to define an intersection type.
interface Product {
    id: number;
    name: string;
    price: number;
}

interface DiscountedProduct {
    discount: number;
}

type SpecialOffer = Product & DiscountedProduct;
let specialOffer: SpecialOffer = {
    id: 1,
    name: "Special Product",
    price: 100,
    discount: 20
};

// 4. Literal types
// Literal types allow you to specify exact values that a variable can hold. This can be useful for defining specific string or numeric values.
type Direction = "North" | "South" | "East" | "West";
let direction: Direction = "North"; // Valid
// direction = "Up"; // Error: Type '"Up"' is not assignable to type 'Direction'.

// 5. Type narrowing (typeof, instanceof, in)
// Type narrowing allows you to refine the type of a variable within a specific block of code. This is often done using type guards like 'typeof', 'instanceof', or the 'in' operator.
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log("Processing a string: " + value.toUpperCase());
    } else {
        console.log("Processing a number: " + value.toFixed(2));
    }
}

// 6. Custom type guards
// Custom type guards are functions that return a boolean value and are used to narrow down types in a more complex way than the built-in type guards.
interface Cat {
    meow: () => void;
}
interface Dog {
    bark: () => void;
}
function isCat(pet: Cat | Dog): pet is Cat {
    return (pet as Cat).meow !== undefined;
}
function handlePet(pet: Cat | Dog) {
    if (isCat(pet)) {
        pet.meow();
    } else {
        pet.bark();
    }
}

