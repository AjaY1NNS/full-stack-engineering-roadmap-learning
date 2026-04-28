// Error Handling
try {
    // Code that might throw an error
    let x = 5;
    console.log(x);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that runs regardless of whether an error occurred
    console.log("Execution completed.");
}
// Throwing a custom error
function validateAge(age) {
    if (age < 0) {  
        throw new Error("Age cannot be negative");
    }
    return "Valid age";
}

try {
    console.log(validateAge(-5)); // This will throw an error
} catch (error) {
    console.error("Validation error:", error.message);
}

