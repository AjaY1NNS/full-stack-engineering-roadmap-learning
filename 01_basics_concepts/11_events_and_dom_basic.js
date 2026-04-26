// Events & DOM Basics

// 1. Event Listeners
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
// 2. Event Object
button.addEventListener("click", function(event) {
    console.log("Button clicked at coordinates: (" + event.clientX + ", " + event.clientY + ")");
});
// 3. DOM Manipulation
const div = document.getElementById("myDiv");
div.textContent = "Hello, World!";
div.style.color = "blue";
div.classList.add("highlight");
// 4. Creating and Appending Elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
div.appendChild(newParagraph);
// 5. Removing Elements
const oldParagraph = document.getElementById("oldParagraph");
div.removeChild(oldParagraph);
// 6. Event Delegation
const list = document.getElementById("myList");
list.addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        console.log("List item clicked: " + event.target.textContent);
    }   
});
// 7. Preventing Default Behavior
const link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link click prevented!");
});
// 8. Stopping Event Propagation
const parentDiv = document.getElementById("parentDiv");
const childDiv = document.getElementById("childDiv");
parentDiv.addEventListener("click", function() {
    console.log("Parent div clicked!");
});
childDiv.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Child div clicked!");
});
// When the child div is clicked, it will log "Child div clicked!" and will not trigger the parent div's click event, demonstrating that event propagation has been stopped.
// 9. Keyboard Events
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});
// 10. Form Handling
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const input = document.getElementById("myInput");
    console.log("Form submitted with input: " + input.value);
});

// DOM (Document Object Model) Basics
// 1. Selecting Elements
const header = document.querySelector("h1");
const items = document.querySelectorAll(".item");
// 2. Traversing the DOM
const parent = header.parentElement;
const children = parent.children;
// 3. Modifying Attributes
header.setAttribute("data-custom", "customValue");
console.log(header.getAttribute("data-custom")); // customValue
header.removeAttribute("data-custom");
// 4. Modifying Classes
header.classList.add("highlight");
header.classList.remove("highlight");
header.classList.toggle("active");
// 5. Modifying Styles
header.style.color = "red";
header.style.fontSize = "24px";
// 6. Creating and Inserting Elements
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div.";
document.body.appendChild(newDiv);
// 7. Removing Elements
const oldDiv = document.getElementById("oldDiv");
oldDiv.parentElement.removeChild(oldDiv);
// 8. Cloning Elements
const clonedHeader = header.cloneNode(true);
document.body.appendChild(clonedHeader);
// 9. Working with Forms
const formElement = document.getElementById("myForm");
const inputElement = document.getElementById("myInput");
formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted with input: " + inputElement.value);
});
// 10. Working with Attributes
const image = document.getElementById("myImage");
image.setAttribute("src", "new-image.jpg");
console.log(image.getAttribute("src")); // new-image.jpg
image.removeAttribute("src");