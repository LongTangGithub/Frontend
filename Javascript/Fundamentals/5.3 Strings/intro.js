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
//------------------------------------------------------------------------------------

/**
 * ! Truncate the text
 * 
 * Create a function truncate(str, maxlength) that checks the length of the str and, 
 * if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
 * to make its length equal to maxlength.
 * 
 * ? The result of the function should be truncated (if needed)
 */

function truncate(str, maxLength){
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "...";
    }
}

console.log( truncate("What I'd like to tell on this topic is:", 20));        // "What I'd like to te…"
//------------------------------------------------------------------------------------

/**
 * ! Extract the money
 * 
 * We have a cost in the form `$120`
 * That is: the dollar sign goes first, and then the number
 * Create a function `extractCurrencyValue(str)` that would extract the numeric value 
 * from such string and return it
 * 
 */

function extractCurrencyValue(str){
    return parseInt(str.slice(1));
}

console.log( extractCurrencyValue("$120") === 120);

