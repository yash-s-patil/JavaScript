// the "new" keyword
// it creates a new object
const person = {};
const person1 = new Object(); // this allows us to create an obj constructor
person.firstname = 'John';
person1.firstname = 'John';
console.log(person);
console.log(person1);

const arr = [1,2,3]; // 
const arr1 = new Array(1,2,3);
console.log(arr, arr1);

// when to use the new keyword - when dealing with dates because it gives additional methods
const myDate = new Date('August 15, 2025');
console.log(myDate); // javascript creates a new date object
console.log(myDate.getFullYear()); // 2025

// everything in javascript is an object
// when we use new keyword we can use lot of builtin methods associated with it
const mynumber = new Number(100.234);
console.log(mynumber.toFixed(0)); // 100

// in array and other complex data type we can use many built-in methods 
// without using new keyword beacuse of literal syntax. behind it creates an object with all the properties
// Dates dont have literal syntax therefore we need to use new keyword

// "this" keyword
// used to reference an object that is executing a current function
// every function has a reference to it in its current execution context

// classes - a class is a schema for an object that can save many values
class Person {
    constructor(name, age, isworking){
        this.name = name;
        this.age = age;
        this.isworking = isworking;
    }
}

const user = new Person('john', 25, true);
console.log(user);

// how to do the same thing but using function

const createperson = (name, age, isworking) => {
    return {name, age, isworking};
}
const user1 = createperson('melisa', 23, true);
const user2 = createperson('kevin', 26, false);
console.log(user1);
console.log(user2);
