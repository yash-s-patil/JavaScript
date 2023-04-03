// global scope
// global variables can be accessed from any anywhere throughout the program
const personname = 'John';

const logname = () => {
    console.log(personname);
}
logname();

//local scope - variables defined inside the function are in the local scope 
// we cannot access local variable outside the scope
const somefunction = () => {
    //local scope 
    const name = 'jenny';
    console.log(name);
}
somefunction();
//console.log(name); - you cannot access a local variable outside the scope

// block scope 
// variable declared in the block, cannot be accessed outside of the block.
if (true) {
    const age = 19;
    console.log(age);
}
// console.log(age); - we cannot access age outside the block 

// Hoisting in Javascript 

// not used in modern javascript
// variables and function declaration are moved to the top of the scope before code execution
console.log(typeof place);
// output - undefined

// console.log(place);
// output - error - not defined 

console.log(place);
var place = 'India';
// output - undefined
// it brings the variable declaration or the function declaration to the top of scope not the actual value assignment.
/* after execution 
var place;
console.log(place);
place = 'India';
*/

function hoist () {
    console.log(message);
    var message = 'test';
}
hoist();
//output - undefined 
/* while execution
function hoist () {
    var message;
    console.log(message);
    message = 'test'
}
hoist();
*/

// Hoisting - Does'nt work with latest javascript like declaring a variable with let, const keyword and using arrow functions 
// we get reference error - cannot access the variable before initialization.


// Closures in Javascript
// in the inner scope we can access the variable from the outer scope

const init = () => {
    const hobby = 'Learning javascript'; // local variable created by init function

    const displayhobby = () => { // displayhobby is the inner function, a closure
        console.log(hobby); // using a variable created in the parent function
    }
    return displayhobby;
}
const myfunc = init();
myfunc();