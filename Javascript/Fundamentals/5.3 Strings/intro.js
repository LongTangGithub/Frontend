/**
 * ! Write a function `checkSubstring` that takes two arguments: `mainString` and `subString`
 * ! The argument should return `true` if `substring` is found within `mainString`, and `false` otherwise
 * 
 * ? Use the include method for this problem
 */

function checkSubstring(mainString, subString) {
    return mainString.includes(subString);
}

console.log(checkSubstring("Hello, world!", "world")); // true
console.log(checkSubstring("JavaScript is awesome", "Python")); // false
console.log(checkSubstring("OpenAI GPT-4", "GPT")); // true



/**
 * 
 */