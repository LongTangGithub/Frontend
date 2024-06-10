/**
 * ! While Loop
 * ? Loops until a set of conditions is false
 * ? 
 */

const names = [
    'Alex',
    'Jamilia',
    'Joe',
    "Aisha",
    'Bob'
];

let index = 0;
while( index < names.length ){
    console.log(names[index]);
    index++;                     // Not having this wil ltrigger a infinite loop
}

/**
 * ! Do...While Loop
 * ? When you want to execute at least once
 */

do {
    console.log("hello");
}while(false);                  // it the condition was true, it will tirgger the infinite loop


/**
 * ! break and continue
 * ? `break` will break out of the loop
 * 
 * todo: Can be use for "for loop" and "while loop"
 */

for ( let i = 0; i <= 10; i++ ) {
    console.log(i);
    if(i === 5){
        break;
    }
}

for ( let i = 0; i <= 10; i++ ) {
    if( i < 5){
        continue;
    }
    console.log(i)
}