//  Type Conversions 
// 1. Implicit type conversion (type coercion)
const num = 10;
const str = "The number is: " + num; // The number 10 will be coerced to a string and concatenated with "The number is: "
console.log(str); // "The number is: 10"    

// 2. Explicit type conversion
const num2 = 20;
const str2 = String(num2); // Convert the number 20 to a string
console.log(str2); // "20"
const str3 = "30";
const num3 = Number(str3); // Convert the string "30" to a number
console.log(num3); // 30
const str4 = "true";
const bool = Boolean(str4); // Convert the string "true" to a boolean
console.log(bool); // true
const str5 = "false";
const bool2 = Boolean(str5); // Convert the string "false" to a boolean
console.log(bool2); // true (Note: any non-empty string is considered true in JavaScript)   
const str6 = "";
const bool3 = Boolean(str6); // Convert the empty string "" to a boolean
console.log(bool3); // false (Note: an empty string is considered false in JavaScript)  
const num4 = 0;
const bool4 = Boolean(num4); // Convert the number 0 to a boolean
console.log(bool4); // false (Note: the number 0 is considered false in JavaScript)
const num5 = 1;
const bool5 = Boolean(num5); // Convert the number 1 to a boolean
console.log(bool5); // true (Note: any non-zero number is considered true in JavaScript)    

// 3. Type conversion functions
const num6 = 50;
const str7 = num6.toString(); // Convert the number 50 to a string using the toString() method
console.log(str7); // "50"
const str8 = "60";
const num7 = parseInt(str8); // Convert the string "60" to an integer using the parseInt() function
console.log(num7); // 60
const str9 = "70.5";
const num8 = parseFloat(str9); // Convert the string "70.5" to a floating-point number using the parseFloat() function
console.log(num8); // 70.5  
const num9 = 80.5;
const str10 = num9.toFixed(1); // Convert the number 80.5 to a string with 1 decimal place using the toFixed() method
console.log(str10); // "80.5"   


// 4. Type conversion with the unary plus operator
const str11 = "90";
const num10 = +str11; // Convert the string "90" to a number using the unary plus operator
console.log(num10); // 90
const str12 = "100.5";
const num11 = +str12; // Convert the string "100.5" to a number using the unary plus operator
console.log(num11); // 100.5
const str13 = "abc";
const num12 = +str13; // Attempt to convert the string "abc" to a number using the unary plus operator
console.log(num12); // NaN (Not a Number, because "abc" cannot be converted to a number)    

// 5. Type conversion with the double negation operator
const str14 = "true";
const bool6 = !!str14; // Convert the string "true" to a boolean using the double negation operator
console.log(bool6); // true
const str15 = "";
const bool7 = !!str15; // Convert the empty string "" to a boolean using the double negation operator
console.log(bool7); // false (Note: an empty string is considered false in JavaScript)
const num13 = 0;
const bool8 = !!num13; // Convert the number 0 to a boolean using the double negation operator
console.log(bool8); // false (Note: the number 0 is considered false in JavaScript)
const num14 = 1;
const bool9 = !!num14; // Convert the number 1 to a boolean using the double negation operator
console.log(bool9); // true (Note: any non-zero number is considered true in JavaScript)    

// These are some of the ways to perform type conversions in JavaScript. Understanding type conversions is important for writing effective JavaScript code, as it allows you to work with different data types and avoid unexpected behavior due to implicit type coercion. 