// Iterators & Generators
// Iterators are objects that allow us to traverse through a collection of data, such as an array or a string. They provide a way to access each element in the collection one at a time, without needing to know the underlying structure of the data.
// In JavaScript, we can create an iterator using the Symbol.iterator method. This method returns an object that has a next() method, which returns the next value in the collection and a boolean indicating whether there are more values to iterate over.
const myArray = [1, 2, 3];
const myIterator = myArray[Symbol.iterator]();
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { value: undefined, done: true }
// Generators are a special type of function that can be paused and resumed, allowing us to create iterators more easily. They are defined using the function* syntax and use the yield keyword to produce values one at a time.
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const myGen = myGenerator();
console.log(myGen.next()); // { value: 1, done: false }
console.log(myGen.next()); // { value: 2, done: false }
console.log(myGen.next()); // { value: 3, done: false }
console.log(myGen.next()); // { value: undefined, done: true }

// In summary, iterators and generators are powerful tools in JavaScript that allow us to traverse through collections of data and create custom iterators with ease. Understanding how to use iterators and generators can help you write more efficient and flexible code when working with data in your JavaScript applications.


// Symbol.iterator
// The Symbol.iterator is a built-in symbol in JavaScript that is used to define the default iterator for an object. When an object has a property with the key Symbol.iterator, it can be iterated over using a for...of loop or any other construct that expects an iterable. The Symbol.iterator property should return an object that has a next() method, which returns the next value in the iteration and a boolean indicating whether there are more values to iterate over.
const myObject = {
    data: [1, 2, 3],
    [Symbol.iterator]: function* () {
        for (let item of this.data) {
            yield item;
        }
    }
};
for (let value of myObject) {
    console.log(value); // 1, 2, 3
}
// In this example, we define an object myObject that has a data property containing an array. We then define the Symbol.iterator property as a generator function that yields each item in the data array. This allows us to use a for...of loop to iterate over myObject and log each value to the console. The Symbol.iterator is a powerful tool for creating custom iterables in JavaScript and can be used to make your objects more flexible and easier to work with when it comes to iteration.


// Lazy execution
// Lazy execution is a programming technique where values are computed only when they are needed, rather than computing all values upfront. This can help improve performance and reduce memory usage, especially when working with large datasets or infinite sequences.
// In JavaScript, generators are a great way to implement lazy execution. When you use a generator function, the values are produced one at a time as you iterate over them, rather than all at once. This allows you to work with potentially infinite sequences or large datasets without consuming a lot of memory.
function* lazySequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
const sequence = lazySequence();
console.log(sequence.next()); // { value: 0, done: false }
console.log(sequence.next()); // { value: 1, done: false }
console.log(sequence.next()); // { value: 2, done: false }
// In this example, we define a generator function lazySequence that produces an infinite sequence of numbers starting from 0. Each time we call next() on the sequence, it computes the next value in the sequence and returns it. This allows us to work with an infinite sequence without consuming a lot of memory, as values are computed lazily as needed. Lazy execution can be a powerful technique for improving performance and managing resources effectively in your JavaScript applications.
