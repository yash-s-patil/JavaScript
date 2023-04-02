// function declaration (defining a function)
function square (number) {
    return number * number;
}
// function call (invoke/executing a function)
const result = square(5);
console.log(result);

// function declaration
function name (params) {
    // statements
    // have access to "this" keyword
}

// function expression - anonymous function - function which does not have a name 
// anonymous function is equal to a variable
const name1 = function(params){
    //statements
}

// arrow function - most modern way to create javascript function
const name2 = (params) => {
    //statements
}

// examples 
function sayHi (name) {
    console.log(`Hi, ${name}`);
}
sayHi('Joe');

function add (a, b) {
    return a + b;
}
const sum = add(2, 3);
console.log(sum);

// Arrow functions 
const calculate_square = (number) => {
    return number * number ;
}
const result_number = calculate_square(7);
console.log(result_number);

// parameters - used when defining a function
// arguments - passed when making a function call
