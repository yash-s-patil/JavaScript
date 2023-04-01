// Creating a variable using var keyword. used in earlier version of javascript
var variableName = 'Welcome to variables';
console.log(variableName);

// new way of declaring the variable after ES6 version. We can reassign the values
let fruit = 'apple';
console.log(fruit);
fruit = 'orange';
console.log(fruit);

// assigned to data whose values cannot and will not change throughout the whole script.
// if we use const keyword we cannot reassign the value to that variable.
const gender = 'Male';
console.log(gender);

// this is a single line comment 
/* 
    This
    is
    a multi line comment
*/

// String data type
const singleQuotes = 'Hello World';
console.log(singleQuotes);
const doubleQuotes = "Hello!!"
console.log(doubleQuotes);

const personname = 'Jane';
const backticks = `Hello ${personname}`;
console.log(backticks);
console.log(typeof backticks);

// Numbers data type
const wholeNumber = 5;
const decimalnumber = 0.4;
console.log(wholeNumber);
console.log(decimalnumber);

const firstnumber = 5;
const secondnumber = 10;
const result = firstnumber + secondnumber;
console.log(result);

//Boolean data type
// true or false
const isCool = true;
console.log(isCool);
console.log(typeof isCool);
if(isCool){
    console.log('Hi man you are cool');
} else{
    console.log('Hi you are not cool');
}
const age = 20;
console.log(age > 25);

// Null data type
// type of null is an object.
let age1 = null;
console.log(age1);
age1 = 23;
console.log(age1);

// Undefined data type
let x;
console.log(x);

// Object data type
// Objects is used to store collections of data in more complex entity
// Objects in the simplest form are used to group variables.
const person = {
    name: 'Alex',
    age: 25,
}
console.log(person);
console.log(typeof person);
console.log(person.name);

// array
const arr = [1,2,3,4];
console.log(arr);
console.log(typeof arr);

// date object
const date = new Date();
console.log(date);

// Javascript is a dynamically typed language.



