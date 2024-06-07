/**
 * ! String Conversion
 * ? String Conversion occurs when we want to convert a value to a string
 */

let value = true;
value = String(value);

console.log(typeof value);          // string

/**
 * ! Numeric Conversion
 * ? Numeric conversion in mathematical functions and expressions happens 
 * ? automically 
 * 
 */

console.log("6" / "2");        // 3, strings are converted to numbers
console.log("6" / 2);         // 3, same thing applies

let numStr = "123";
numStr = Number(numStr);
console.log(numStr);        // 123