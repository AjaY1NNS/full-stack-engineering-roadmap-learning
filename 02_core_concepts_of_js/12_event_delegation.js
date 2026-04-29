// Event Delegation
// Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching individual event listeners to each child element. This allows you to manage events more efficiently, especially when dealing with dynamic content.
// For example, if you have a list of items and you want to handle click events on each item, instead of attaching a click event listener to each item, you can attach a single click event listener to the parent element (the list) and use event delegation to determine which item was clicked:
// HTML structure
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
// JavaScript code using event delegation
const myList = document.getElementById('myList');
myList.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
    }
});

// In this example, we attach a click event listener to the parent element (the unordered list with id "myList"). When a click event occurs on any of the list items, the event listener checks if the target of the event is an 'LI' element. If it is, it logs the text content of the clicked item to the console.
// Event delegation is particularly useful when you have a large number of child elements or when the child elements are dynamically added or removed from the DOM. By attaching a single event listener to the parent element, you can efficiently manage events without having to worry about adding or removing event listeners for each individual child element.

// Bubbling & capturing
// In JavaScript, when an event occurs on an element, it goes through a process called event propagation, which consists of three phases: capturing, target, and bubbling.
// 1. Capturing Phase: The event starts from the root of the document and travels down to the target element. During this phase, event listeners that are set to capture will be triggered.
// 2. Target Phase: The event reaches the target element, and any event listeners attached to the target element will be triggered.
// 3. Bubbling Phase: After the target phase, the event bubbles back up to the root of the document. During this phase, event listeners that are set to bubble will be triggered.
// By default, event listeners are set to bubble, meaning they will be triggered during the bubbling phase. However, you can specify whether an event listener should be triggered during the capturing phase by passing a third argument to the addEventListener method:
element.addEventListener('click', function(event) {
    console.log('Clicked!');
}, true); // The third argument 'true' indicates that this event listener should be triggered during the capturing phase
// In this example, the click event listener will be triggered during the capturing phase. If you set the third argument to false or omit it, the event listener will be triggered during the bubbling phase.
// Understanding event propagation and how to use event delegation can help you write more efficient and maintainable code when handling events in your JavaScript applications.

// Efficient event handling
// Event delegation allows you to handle events more efficiently by attaching a single event listener to a parent element instead of attaching individual event listeners to each child element. This can improve performance, especially when dealing with a large number of child elements or when the child elements are dynamically added or removed from the DOM.
// For example, if you have a list of items and you want to handle click events on each item, instead of attaching a click event listener to each item, you can attach a single click event listener to the parent element (the list) and use event delegation to determine which item was clicked:
const myList = document.getElementById('myList');
myList.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
    }
});
// In this example, we attach a click event listener to the parent element (the unordered list with id "myList"). When a click event occurs on any of the list items, the event listener checks if the target of the event is an 'LI' element. If it is, it logs the text content of the clicked item to the console.
// This approach is more efficient than attaching individual event listeners to each list item, especially if the list is long or if items are added or removed dynamically. By using event delegation, you can manage events more efficiently and reduce the number of event listeners in your application, which can improve performance and make your code easier to maintain.
