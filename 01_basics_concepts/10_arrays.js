// Arrays are a data structure that can hold multiple values at once. They are ordered and can contain elements of any type, including other arrays.  
// 1. Array literal
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
// 2. Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers[0]); // 1
console.log(numbers[1]);
// 3. Array with mixed types
const mixedArray = [42, "Hello", true, null, undefined, { name: "Alice" }, [1, 2, 3]];
console.log(mixedArray[0]); // 42
console.log(mixedArray[1]); // Hello
console.log(mixedArray[2]); // true
console.log(mixedArray[3]); // null
console.log(mixedArray[4]); // undefined
console.log(mixedArray[5]); // { name: "Alice" }
console.log(mixedArray[6]); // [1, 2, 3]
// 4. Array with nested arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];   
console.log(nestedArray[0]); // [1, 2]
console.log(nestedArray[1]); // [3, 4]
console.log(nestedArray[2]); // [5, 6]
console.log(nestedArray[0][0]); // 1
console.log(nestedArray[0][1]); // 2
console.log(nestedArray[1][0]); // 3
console.log(nestedArray[1][1]); // 4
console.log(nestedArray[2][0]); // 5
console.log(nestedArray[2][1]); // 6
// 5. Array with different data types
const diverseArray = [1, "Two", { three: 3 }, [4, 5], function() { return "Six"; }];    
console.log(diverseArray[0]); // 1
console.log(diverseArray[1]); // Two
console.log(diverseArray[2]); // { three: 3 }
console.log(diverseArray[3]); // [4, 5]
console.log(diverseArray[4]()); // Six  
// 6. Array with empty slots
const sparseArray = [1, , 3, , 5];
console.log(sparseArray[0]); // 1
console.log(sparseArray[1]); // undefined (empty slot)
console.log(sparseArray[2]); // 3
console.log(sparseArray[3]); // undefined (empty slot)
console.log(sparseArray[4]); // 5   
// 7. Array with length property
const lengthArray = [1, 2, 3];
console.log(lengthArray.length); // 3
lengthArray[5] = 6; // Adding an element at index 5
console.log(lengthArray.length); // 6 (length is now 6, even though index 3 and 4 are empty)
console.log(lengthArray); // [1, 2, 3, <2 empty items>, 6] (shows the empty slots)  
// 8. Array with different types of elements
const complexArray = [
    42,
    "Hello",
    true,
    null,
    undefined,
    { name: "Alice" },
    [1, 2, 3],
    function() { return "Function in array"; }
];
console.log(complexArray[0]); // 42
console.log(complexArray[1]); // Hello
console.log(complexArray[2]);   // true
console.log(complexArray[3]); // null
console.log(complexArray[4]); // undefined
console.log(complexArray[5]); // { name: "Alice" }
console.log(complexArray[6]); // [1, 2, 3]
console.log(complexArray[7]()); // Function in array (calling the function element) 

// 9. Array All Methods
const methodArray = [1, 2, 3, 4, 5];
console.log(methodArray.length); // 5
methodArray.push(6);
console.log(methodArray); // [1, 2, 3, 4, 5, 6]
methodArray.pop();
console.log(methodArray); // [1, 2, 3, 4, 5]
methodArray.unshift(0);
console.log(methodArray); // [0, 1, 2, 3, 4, 5]
methodArray.shift();
console.log(methodArray); // [1, 2, 3, 4, 5]
methodArray.splice(2, 1); // Remove 1 element at index 2
console.log(methodArray); // [1, 2, 4, 5]
methodArray.slice(1, 3); // Get a portion of the array from index 1 to 3 (exclusive)
console.log(methodArray.slice(1, 3)); // [2, 4]
methodArray.indexOf(4); // Get the index of the first occurrence of 4
console.log(methodArray.indexOf(4)); // 2
methodArray.includes(5); // Check if the array includes the value 5
console.log(methodArray.includes(5)); // true
methodArray.join(", ");// Join the elements of the array into a string with a comma and space as a separator
console.log(methodArray.join(", ")); // 1, 2, 4, 5  

// 10. Array Iteration
const iterationArray = [1, 2, 3, 4, 5];
iterationArray.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5
iterationArray.map(num => num * 2); // Create a new array with each element multiplied by 2
console.log(iterationArray.map(num => num * 2)); // [2, 4, 6, 8, 10]
iterationArray.filter(num => num % 2 === 0); // Create a new array with only the even numbers
console.log(iterationArray.filter(num => num % 2 === 0)); // [2, 4]
iterationArray.reduce((acc, curr) => acc + curr, 0); // Reduce the array to a single value by summing all the elements
console.log(iterationArray.reduce((acc, curr) => acc + curr, 0)); // 15 (1 + 2 + 3 + 4 + 5) 
iterationArray.some(num => num > 3); // Check if at least one element in the array is greater than 3
console.log(iterationArray.some(num => num > 3)); // true (4 and 5 are greater than 3)
iterationArray.every(num => num > 0); // Check if all elements in the array are greater than 0
console.log(iterationArray.every(num => num > 0)); // true (all numbers are greater than 0)
iterationArray.find(num => num > 3); // Find the first element in the array that is greater than 3
console.log(iterationArray.find(num => num > 3)); // 4 (the first number greater than 3 is 4)
iterationArray.findIndex(num => num > 3); // Find the index of the first element in the array that is greater than 3
console.log(iterationArray.findIndex(num => num > 3)); // 3 (the index of the first number greater than 3 is 3) 
