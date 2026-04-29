// Asynchronous JavaScript
// Asynchronous JavaScript allows you to perform tasks without blocking the main thread of execution. This is particularly useful for tasks that take a long time to complete, such as network requests or file I/O operations.

// 1. Callbacks
// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.
function fetchData(callback) {
    setTimeout(function() {
        const data = "Data fetched from server";
        callback(data);
    }, 2000);
}
fetchData(function(result) {
    console.log(result); // Data fetched from server (after 2 seconds)
});
// 2. Promises
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
function fetchDataPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = "Data fetched from server";
            resolve(data);
        }, 2000);
    });
}
fetchDataPromise().then(function(result) {
    console.log(result); // Data fetched from server (after 2 seconds)
}).catch(function(error) {
    console.error(error);
});
// 3. Async/Await
// Async/Await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous-looking manner.
async function fetchDataAsync() {
    try {
        const result = await fetchDataPromise();
        console.log(result); // Data fetched from server (after 2 seconds)
    } catch (error) {
        console.error(error);
    }
}
fetchDataAsync();
// In this example, the async function fetchDataAsync uses the await keyword to wait for the Promise returned by fetchDataPromise to resolve before logging the result. This makes the code easier to read and understand compared to using .then() and .catch() with Promises.
