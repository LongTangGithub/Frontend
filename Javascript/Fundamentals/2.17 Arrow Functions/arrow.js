/**
 * ! Arrow Functions
 * ? A shorter version of function expression, the function accepts arguments, evaluates the expression on the right and return its result
 * ? let function = (arg1, arg2, ... argN) => expression 
 * 
 * todo: if there's only one argument, parentheses can be omitted
 * todo: if there are no arguments, parenthesis must be present but can be empty
 */


// Same thing as arrow functions but redundant
let testFunction = function(arg1, arg2) {
    return arg1 + arg2;
}

let sum = (a, b) => (a + b);
console.log(sum(1, 2));         // 3

//! Empty arguments
let sayHi = () => console.log("Hello");  // Hello
sayHi();

//! One argument
let double = n => n * 2;
console.log(double(2));       // 4


/**
 * ! Multiline arrow functions
 * ? Sometimes we need more complex function, so we can enclose them in curly braces
 * ? The major difference is that `curly braces` require a `return` within them to return a value
 */

let sum2 = (c, d) => {
    let result = c + d;
    return result;
}

console.log(sum2( 3, 4));     // 7

//! Returning objects directly using Arrow Functions
// ? Note you notice the `()` before the curly braces, thats because we're dealing with functions
const getEmail = email => ({
    email: email,
    emailAddress: `www.${email.toLowerCase()}.com`
}
)
const email = getEmail("LongTang")
console.log(JSON.stringify(email, null, 1));


//! Task
let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
    'Do you agree?',
    () => console.log("You agreed"),
    () => console.log('You interupted execution'),
);