//Arithmetic operators
const a = 5;
const b = 10;
let result = 0;

//addition
result = a + b;
console.log(result);

//subtraction
result2 = a - b;
console.log(result2);

//multiplication
result3 = a * b;
console.log(result3);

//division
result4 = a / b;
console.log(result4);

//exponent
result5 = b ** a;
console.log(result5);

//modulo - prints remainder
result6 = b % a;
console.log(result6);

// increment decrement
result++;
result--;

// Comparison operators and equality
const c = 5;
const d = 10;
// greater than
console.log(c > d);
// greater than equal to
console.log(c >= d);
// less than 
console.log(c < d);
// less than or equal to 
console.log(c <= d);
// Is equal
console.log(c == d);
// not equal 
console.log(c != d);
// strict equality
console.log(c === d);
// strict inequality
console.log(c !== d);

//lose equality - prints true 
// compares only value. Doesnt compare data type
console.log(5 == '5');
// strict equality - prints false
// compares values and data types
console.log(5 === '5');

// The good ones: === !==
// the evil twins: == != - produces unexpected results
// Always use strict equality

// logical operators 
// AND(&&) => All operands are true => true 
console.log(true && true);
// OR (||) => Atleast one operand is true => true
console.log(true || false);
// NOT (!) 
console.log(!true);

// Assignment operator
let number = 5;
number += 5; // number = number + 5
console.log(number);
number -= 5; // number = number - 5
console.log(number);
number *= 5; // number = number * 5
console.log(number);
number /= 5; // number = number / 5
console.log(number);

let string = 'Hello';
string += ' I am john';
console.log(string);














