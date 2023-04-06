// ECMAscript 6 or simple ES6

// const and let
// arrow functions
// default parameters
// template strings

// module imports and exports
import {dogsname,numberofdogs} from './dogs.js';
import onlyonething from './test.js';
console.log(`I have ${numberofdogs} dogs`);
console.log(`my dogs are: ${dogsname}`);
console.log(onlyonething);

// rest and spread operator
// we want to add values but we dont know how many arguments we have then we use 
// rest operator
const add = (...args) => {
    return args.reduce((acc, val) => acc + val);
}
console.log(add(2,2,2,2,2,2));

// spread operator
const numbers = [1,2,3,4,5];
console.log( ...numbers); // takes the number outside the array and console logs them

const object = {name: 'John', age:25};
const object1 = {...object, name: 'Jenny'};
console.log(object);
console.log(object1);

// object and array destructuring
// obj destructuring
const person11 = {
    firstname: 'jacob',
    lastname: 'vee',
    car: {
        color: 'red',
        wheels: 4
    },
    animals: {
        dog: {
            name: 'fluffy',
            age: 3
        },
        cat: {
            name: 'kitty',
            age: 3
        }
    }
}
const { animals: {dog, cat} } = person11;
console.log(dog.name, dog.age); // no need of person11.animal.dog.name
console.log(cat.name, cat.age);

// array destructuring
const introduction = ['hello', 'i', 'am', 'kevin'];
// const greeting = introduction[0];
// const name = introduction[3];
// console.log(greeting, name); // lot of work
// use array destructuring
const [greeting, , , name] = introduction;
console.log(greeting, name);