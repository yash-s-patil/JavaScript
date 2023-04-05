// primitive values are copied by values and objects are copied by reference

// cloning arrays
// 1st way: spread operator
const numbers = [1, 2, 3, 4, 5]; // #123asd
//console.log(...numbers);
// output - 1 2 3 4 5 - values got taken out of the array
const copiednumbers = numbers; // #123asd

const newnumbers = [ ...numbers ]; // #321asd
console.log(newnumbers);

console.log(numbers === copiednumbers); // true
// this returns true because because both arrays point to the same location in memory
// if we change numbers array, copiednumbers array will also change
console.log(numbers === newnumbers); //false
// this returns false because they represent completely different array
// if we change the numbers array newnumbers array will not change but copiednumbers array will change

numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(copiednumbers); // [1, 2, 3, 4, 5, 6]
console.log(newnumbers); //  [1, 2, 3, 4, 5]
// this is shallow clone

// 2nd way: array slice()
const arrayslice = numbers.slice();
numbers.push(7);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
console.log(copiednumbers); // [1, 2, 3, 4, 5, 6, 7]
console.log(arrayslice); // [1, 2, 3, 4, 5, 6]

// cloning objects
//1st way : spread operator
const person = {name: 'john', age: 20};
const copiedperson = person;
const otherperson = { ...person };
person.age = 22;
console.log(person);  // {name: 'john', age: 22}
console.log(copiedperson); // {name: 'john', age: 22}
console.log(otherperson); // {name: 'john', age: 20}

// deep cloning 
// using shallow clone we can remove the reference from the outer object
// but there can be object inside object and we need to remove the reference from the inner object also otherwise we might get the same error
// for that we use deep cloning for deeply nested objects
const person1 = {
    firstname: 'emma',
    car: {
        brand: 'bmw',
        colour: 'blue',
        wheels: 4
    }
}

const otherperson1 = JSON.parse(JSON.stringify(person1));

otherperson1.firstname = 'Mia';
otherperson1.car.colour = 'red';

console.log(person1);
/* 
firstname: 'emma',
    car: {
        brand: 'bmw',
        colour: 'blue',
        wheels: 4
    }
*/
console.log(otherperson1);
/* 
firstname: 'Mia',
    car: {
        brand: 'bmw',
        colour: 'red',
        wheels: 4
    }
*/