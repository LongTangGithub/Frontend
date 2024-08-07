/**
 * is array copied?
 * 
 * ? What is this code going to show?
 * * This is because the two arrays reference to the same array
 */

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ) // 4

//------------------------------------------------------------------------------------

/**
 * ! Array Operations
 * 
 *  Let’s try 5 array operations.

    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.

 */

let styles = ["Jazz", "Blues"];
console.log( styles)

styles.push("Rock-n-Roll");
console.log( styles )

styles[1] = "Classics";
console.log( styles )

styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log( styles);


//------------------------------------------------------------------------------------

/**
 * ! Calling in an array context
 * 
 * ? What is the result? Why?
 */

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // a,b,function(){...}

//------------------------------------------------------------------------------------

/**
 * ! A maximal subarray
 * 
 * The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
 * The task is: find the contiguous subarray of arr with the maximal sum of items.
 * Write the function getMaxSubSum(arr) that will return that sum.
 * 
 * getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
 * getMaxSubSum([2, -1, 2, 3, -9]) == 6
 * getMaxSubSum([-1, 2, 3, -9, 11]) == 11
 * getMaxSubSum([-2, -1, 1, 2]) == 3
 * getMaxSubSum([100, -9, 2, -3, 5]) == 100
 * getMaxSubSum([1, 2, 3]) == 6 (take all)
 * 
 * If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
 * getMaxSubSum([-1, -2, -3]) = 0
 */