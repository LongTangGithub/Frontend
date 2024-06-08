/**
 * ! Function
 * ? Functions are the main `building blocks of the programn and they are actions
 * ? They allow the code to be invoked many times without repitition
 * ? A function with an empty `return` or without it returns `undefined`
 * 
 * todo: A local variable inside a function is ONLY visible inside that function
 * todo: A global variable can be accessed by functions, that global variable be modify as well
 * 
 * todo: It's a good practice to minimize global variables, most of the time they are use to store project- level data
 */

function showMessage() {
    console.log('Hello this is a function');
}
showMessage();                 // Hello this is a function


//! Accessing and Modifying Global Variables with Functions
let username = "Long";

function showUser() {
    username = "Tang"           //! Modifying variable
    let message = `Hello, ${username} `
    return message;
}
console.log(showUser());       // Hello, Tang
console.log(username);        // Long


//! Passing arbitary data into parameters
function favFood(food1, food2){
    let asnwer = `My favorite food is ${food1} and ${food2}`;
    return asnwer;
}

console.log(favFood("Hotdog", "Burgers"));  // My favorite food is Hotdog and Burgers

//! Using default values in Paramaters
function response(person, answer="Yo what's sup"){
    console.log(`${person} was like ${answer}`);
}
response("Long");                         // Long was like Yo what's sup

//! Alternative default values in Paramaters
function showMessage(text){
    // If text is undefined, or otherwise falsy, set it to empty
    text = text || "empty message";
    console.log(text)
}

//! Using the nullish coalescing operator `??`
function showCount(count){
    console.log(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

//! Function with no return or empty return --> undefined
function showReturn() {}
console.log(showReturn() === undefined);     // true

function showReturn2(){
    return;
}
console.log(showReturn2() === undefined); // true


//! Task
function checkAge(age){
    return age > 18 ? true : 'Did your parents allow you?'
    // return age > 18 || 'Did your parents allow you?'
}
console.log(checkAge(17));

function min(a, b){
    return a < b ? a : b;
}

console.log(min(2, 5))
console.log(min(3, -1))
console.log(min(1, 1))

function pow(x, n){
    return x ** n;
}
console.log(pow(3, 2));