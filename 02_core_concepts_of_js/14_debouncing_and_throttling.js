// Debouncing & Throttling

// Debouncing: A technique to limit the rate at which a function is executed. It ensures that a function is only called after a certain amount of time has passed since the last time it was invoked. This is useful for scenarios like search input, where you want to wait until the user has stopped typing before making an API call.
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Throttling: A technique to limit the rate at which a function is executed. It ensures that a function is only called once in a specified time interval, regardless of how many times it is triggered. This is useful for scenarios like window resizing or scrolling, where you want to limit the number of times a function is called to improve performance.
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// In summary, debouncing and throttling are powerful techniques in JavaScript that help you control the rate at which functions are executed. Debouncing ensures that a function is only called after a certain amount of time has passed since the last invocation, while throttling ensures that a function is only called once in a specified time interval. Understanding when and how to use these techniques can help you improve the performance and user experience of your JavaScript applications.


// Performance optimization
// Both debouncing and throttling are important techniques for performance optimization in JavaScript. By controlling the rate at which functions are executed, you can reduce unnecessary function calls and improve the responsiveness of your application. Debouncing is particularly useful for scenarios where you want to wait until the user has stopped performing an action (like typing) before executing a function, while throttling is useful for scenarios where you want to limit the number of times a function is called (like during scrolling or resizing). By using these techniques effectively, you can enhance the performance and user experience of your JavaScript applications.
