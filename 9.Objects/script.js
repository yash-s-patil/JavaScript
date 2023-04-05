// object is an unordered collection of related data in the form of key value pairs
const person = {
    firstname: 'tom',
    lastname: 'cruise',
    age: 40,
    car: {
        brand: 'toyota',
        year: 2015,
        color: 'red'
    }
};
console.log(person);

// access a property of an object
// dot notation
console.log(person.firstname);

// add a property to a object
person.address = 'California';
person.dog = {name: 'Fluffy', age: 2};
console.log(person);
console.log(person.dog.name);

// square bracket notation to access the property of an object
// dynamic access is allowed here but not allowed in dot notation
console.log(person['lastname']);
console.log(person['dog']['name']);
person['bunglow'] = {name: 'town villa', address: 'washington'};
person['occupation'] = "Business";
console.log(person);

// object methods
// method is a function associated with the object or method is a property of an object which is a function
const dog = {
    name: 'tommy',
    age: 2,
    bark: () => {
        console.log('Woof Woof');
    },
    listallproperties: function() {
        console.log(this.name, this.age);
    } 
};
dog.bark();
dog.listallproperties();

// object built in methods
// initialize an object
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

// Object.keys() -> creates an array containing the keys of an object
const positions = Object.keys(employees);
console.log(positions);

// Object.values() -> creates an array containing the values of an object
const peoples = Object.values(employees);
console.log(peoples);

// Object.entries() -> creates a nested array of key/value pairs of an object
const entries = Object.entries(employees);
console.log(entries);

// loop through the results
entries.forEach((entry) => {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`);
});

// Object.freeze() -> prevents modification to properties and values of an object,
// and prevents properties from being added or removed from an object

const user = {
    username: 'John',
    password: '123123'
};
const admin = Object.freeze(user);
// now we cannot change the properties of an obj user

// Object.seal() -> prevents new properties from being added to an object,
// but allows the modification of existing properties.

const newuser = Object.seal(user);
newuser.password = '121'; //allowed
newuser.active = true; // not allowed
console.log(newuser);
















