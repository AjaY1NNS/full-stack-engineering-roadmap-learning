//  Memory Management
//  JavaScript has an automatic memory management system that handles the allocation and deallocation of memory for variables, objects, and functions. This system is based on a concept called "garbage collection," which helps to free up memory that is no longer in use.

// 1. Memory Allocation
// When you create a variable, object, or function in JavaScript, memory is allocated to store that data. For example:
let myVariable = "Hello, World!"; // Memory is allocated for the string "Hello, World!"
let myObject = { name: "Alice", age: 30 }; // Memory is allocated for the object with properties name and age
function myFunction() {
  // Memory is allocated for the function definition
}
// 2. Garbage Collection
// JavaScript uses a garbage collection mechanism to automatically free up memory that is no longer needed. The most common algorithm used for garbage collection in JavaScript is called "mark-and-sweep." This algorithm works by marking all the objects that are currently in use (reachable) and then sweeping through the memory to free up any unmarked (unreachable) objects.
// For example, if you set a variable to null or reassign it to a new value, the old value becomes unreachable and can be garbage collected:
let myVariable = "Hello, World!"; // Memory is allocated for the string "Hello, World!"
myVariable = null; // The string "Hello, World!" is now unreachable and can be garbage collected
// 3. Memory Leaks
// A memory leak occurs when memory that is no longer needed is not released, leading to a gradual increase in memory usage over time. This can happen if you create references to objects that are no longer needed or if you have circular references between objects. To avoid memory leaks, it's important to manage your references carefully and ensure that you are not keeping unnecessary references to objects.
// For example, if you have a circular reference between two objects, they may not be garbage collected:
function createCircularReference() {
  let obj1 = {};
  let obj2 = {};
  obj1.ref = obj2;
    obj2.ref = obj1; // Both obj1 and obj2 reference each other, creating a circular reference  

    return obj1;
}
let circularRef = createCircularReference(); // Memory for obj1 and obj2 is allocated, but they may not be garbage collected due to the circular reference
// To avoid this, you can break the circular reference by setting one of the references to null:
function createCircularReference() {
  let obj1 = {};
  let obj2 = {};
  obj1.ref = obj2;
  obj2.ref = null; // Break the circular reference by setting obj2's reference to null
  return obj1;
}
let circularRef = createCircularReference(); // Memory for obj1 and obj2 is allocated, but they may not be garbage collected due to the circular reference
// To avoid this, you can break the circular reference by setting one of the references to null:

// In summary, JavaScript's memory management system is designed to automatically handle memory allocation and deallocation through garbage collection. However, it's important for developers to be mindful of how they manage references to objects to avoid memory leaks and ensure efficient use of memory in their applications.

// Stack vs Heap
// In JavaScript, memory is divided into two main areas: the stack and the heap. The stack is used for storing primitive values (like numbers and strings) and function calls, while the heap is used for storing objects and arrays. The stack is organized in a last-in-first-out (LIFO) manner, while the heap is more flexible and can grow and shrink as needed. Understanding the difference between the stack and the heap can help you write more efficient code and manage memory effectively in your JavaScript applications.

// Stack
// The stack is a region of memory that is used for storing primitive values (like numbers and strings) and function calls. When a function is called, a new stack frame is created to hold the function's local variables and parameters. When the function returns, the stack frame is removed, and the memory is freed up. The stack is organized in a last-in-first-out (LIFO) manner, meaning that the most recently added item is the first one to be removed.
function exampleFunction() {
  let a = 10; // Memory for variable 'a' is allocated on the stack
    let b = 20; // Memory for variable 'b' is allocated on the stack
    return a + b; // The function returns the sum of 'a' and 'b'
}
// Heap
// The heap is a region of memory that is used for storing objects and arrays. When you create an object or an array, memory is allocated on the heap to store that data. Unlike the stack, the heap does not have a specific order for allocating and deallocating memory. Instead, it can grow and shrink as needed. When an object or array is no longer needed, it can be garbage collected to free up memory.
let myObject = { name: "Alice", age: 30 }; // Memory for the object is allocated on the heap
let myArray = [1, 2, 3, 4, 5]; // Memory for the array is allocated on the heap
// In summary, the stack is used for storing primitive values and function calls, while the heap is used for storing objects and arrays. Understanding the difference between the stack and the heap can help you write more efficient code and manage memory effectively in your JavaScript applications.

// Garbage collection
// Garbage collection is the process of automatically freeing up memory that is no longer in use. In JavaScript, the most common algorithm used for garbage collection is called "mark-and-sweep." This algorithm works by marking all the objects that are currently in use (reachable) and then sweeping through the memory to free up any unmarked (unreachable) objects. This helps to prevent memory leaks and ensures that your application uses memory efficiently. It's important to be mindful of how you manage references to objects in your code to avoid creating memory leaks and ensure that garbage collection can effectively free up memory when it's no longer needed.
// Example of mark-and-sweep garbage collection:
function createObject() {
  let obj = { name: "Alice", age: 30 }; // Memory for the object is allocated on the heap
  return obj; // The object is returned and can be used outside the function
}
let myObject = createObject(); // Memory for the object is allocated on the heap and is reachable
myObject = null; // The object is now unreachable and can be garbage collected
// In this example, the object created in the createObject function is allocated on the heap and is reachable when it is returned. However, when we set myObject to null, the object becomes unreachable and can be garbage collected by the mark-and-sweep algorithm, freeing up memory that is no longer needed.

