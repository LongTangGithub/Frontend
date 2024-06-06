
/**
 * ! Variables == "storage containers" for data
 * 
 */


/**
 * ! "let" 
 * ? When we define our variables using let, we can update our data as many times
 * ? as we need. When data are updated, the old data is removed 
 * 
 * ? We can also declare two variables and copy data from one into another 
 * ? However, the best practice is to delcare it once
 * 
 * todo: Use `let` when you need to delcare a variable that may be reassigned later on
 * todo: It's also block scope, meaning its only accessible within the block it is defined in
 * 
 */

let message = "Hello";
message = "World";
console.log(message);          // World

let hello = "Hello, Long";
let message2 = hello;
console.log(hello);           // Hello, Long
console.log(message2);       //  Hello, Long

if(true){
    let x = 10;
    console.log(x);        // 10
}
// console.log(x);        // Reference:Error: x is not defined ---> Block Scope



/**
 * ! "const" 
 * ? When we define our variables using `const`, that variable is constant and can't be updated 
 * ? The best practice is to delcare variables once
 * 
 * todo: Use `const` for variables that should not be resassigned after their initial assigment
 * todo: `const` is also block scope,
 * 
 */

const num20 = 20;
// num20 = 30;
// console.log(num20)   // TypeError: Assignment to constant variable


/**
 * ! "var" 
 * ? `var` declaration is hoisted at the top of their scope , meaning their declaration is  
 * ?  processed before any code is executed, but not the assignment
 * 
 * todo: `var` is avoided in modern JS because `let` and `const` provides better scoping rules
 * todo: `var` is function-scope, meaning it's accessible throughout the function it is defined in
 * todo:  if var is declared outside any function, it's globally scoped
 * 
 */

function test() {
    console.log(num2);   // undefined (due to hoisting)
    num2 = 2;
}

/**
 * ! Variable Naming
 * ? There are two limitations on variable names in JS
 * 
 * todo: The name must contain only letters, digits, or the symbols `$` and `_`
 * todo: The first character must not be a digit.
 */

let names, admin;

names = "John";
admin = names;
console.log(admin);             // John

