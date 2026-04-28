// Scopes are the contexts in which variables and functions are accessible.
// JavaScript has three types of scopes: global scope, function scope, and block scope.
// 1. Global Scope
var globalVar = "I am a global variable";
function globalScopeExample() {
  console.log(globalVar); // I am a global variable
}
globalScopeExample();
// 2. Function Scope
function functionScopeExample() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // I am a function variable
}
functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined
// 3. Block Scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // I am a block variable
}

// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// 4. Lexical Scope
function outerFunction() {
    var outerVar = "I am an outer variable";
    function innerFunction() {
        console.log(outerVar); // I am an outer variable
    }
    innerFunction();
}
outerFunction();

// 5. Scope Chain
function firstFunction() {
    var firstVar = "I am the first variable";
    function secondFunction() {
        var secondVar = "I am the second variable";
        function thirdFunction() {
            var thirdVar = "I am the third variable";
            console.log(firstVar); // I am the first variable
            console.log(secondVar); // I am the second variable
            console.log(thirdVar); // I am the third variable
        }
        thirdFunction();
    }
    secondFunction();
}
firstFunction();

// 6. Global Scope Pollution
var pollutedVar = "I am a polluted variable";
function polluteGlobalScope() {
    pollutedVar = "I have been changed in the global scope";
}
console.log(pollutedVar); // I am a polluted variable
polluteGlobalScope();
console.log(pollutedVar); // I have been changed in the global scope (global variable has been modified)    

// 7. Avoiding Global Scope Pollution
(function() {
    var localVar = "I am a local variable";
    console.log(localVar); // I am a local variable
})();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined (local variable is not accessible outside the IIFE)   
