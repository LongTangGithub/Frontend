/**
 * ! String Conversion --> Occurs when we output something
 * ? String Conversion occurs when we want to convert a value to a string
 */

let value = true;
value = String(value);

console.log(typeof value);          // string

/**
 * ! Numeric Conversion --> Occurs in math operations
 * ? Numeric conversion in mathematical functions and expressions happens 
 * ? automically 
 * 
 * ? If the string is not a valid number, the result of the conversion is "NaN"
 * 
 */

console.log("6" / "2");        // 3, strings are converted to numbers
console.log("6" / 2);         // 3, same thing applies

let numStr = "123";
numStr = Number(numStr);
console.log(numStr);        // 123

let age = "Eighteen";
//console.log(age);         // NaN, conversion failed
console.log(Number("123"))
console.log(Number("12)3"))


/**
 * ! Boolean Conversion
 * ? Values that are "empty", like 0, emoty string, null, undefined, and Nan becomes false
 * ? Other values become true
 */

console.log(Boolean(1));            // true
console.log(Boolean(0));           // false

console.log(Boolean("hello"));    // true
console.log(Boolean(""));        // false

console.log("0");               // true
console.log(" ");              // true  ---> due to spaces
