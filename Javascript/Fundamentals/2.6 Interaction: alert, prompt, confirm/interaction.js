//! All these methods are modal: they pause script execution and 
//! don’t allow the visitor to interact with the rest of the page 
//! until the window has been dismissed.

/**
 * ! alert 
 * ? Shows a message 
 * 
 * todo: the mini-window with the message is called a modal window, the word
 * todo: "modal" means that visitors can't interact with the rest of the page
 * todo: , press other buttons, etc until they have dealt with the window
 */

// alert("Hello")


/**
 * ! prompt
 * ? The function `prompt` accepts two arguments
 * 
 * todo: `title`   --> the text to show the visitor
 * todo: `default` --> An optional second parameter, the initial value for the input field
 * 
 * `prompt` shows a message asking the user to input text. 
 *  It returns the text or, if Cancel button or Esc is clicked, ---> null.
 * */

// let age = prompt('How old are you?', 24);
// console.log(`You are now ${age} years old`);       // You are now 24 years old

/**
 * ! confirm
 * ? shows a message and waits for the user to press “OK” or “Cancel”. 
 * ? It returns true for OK and false for Cancel/Esc.
 */

// let isBoss = confirm("Are you the boss?");
// alert(isBoss);         // true if OK is pressed