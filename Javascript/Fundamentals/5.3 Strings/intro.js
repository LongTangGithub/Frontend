/**
 * ! Update the first character
 * 
 * Write a function `ucFirst(str) that returns the string `str` with the uppercased first character
 */

function ucFirst(str) {
    return str.at(0).toUpperCase() + str.slice(1)

}

console.log( ucFirst("john") );
//------------------------------------------------------------------------------------

/**
 * ! Check for spam
 * 
 * Write a function `checkSpam(str)` that returns `true` if `str` contains `viagra` or `XXX, otherwise false
 * 
 * ? Must be case insensitive
 */

function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes("viagra") || newStr.includes("xxx");
}

console.log( checkSpam('buy ViAgRa now') );
console.log( checkSpam('free xxxx') );
console.log( checkSpam('innocent rabbit') );