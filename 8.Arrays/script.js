// array - ordered collection of data
const months = ['jan', 'feb', 'mar', 'apr'];
console.log(months);

// retrieve certain elements in an array
console.log(months[0]);

// replace elements in an array
months[0] = 'January';
months[4] = 'may';
console.log(months);

// get the count of total elements in an array
console.log(months.length);

// loop through an array
for(let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

// array methods
const names = ['john', 'bob', 'david', 'mark'];

// array push - adds the new element to the end of the array
names.push('dean');
console.log(names);

// array pop - deletes the last element of an array
names.pop();
console.log(names);

// array shift - deletes the first element of an array
names.shift();
console.log(names);

// array unshift - adds a new value to the start of an array
names.unshift('Dean');
console.log(names);

// array splice - used to add or delete multiple values in an array
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];
alphabets.splice(2, 0, 'x','y');
// 2 - add elements in the second index
// 0 - remove 0 elements after second index
// 'x' , 'y' - add x and y after second index
console.log(alphabets);
// output - ['a', 'b', 'x', 'y', 'c', 'd', 'e', 'f']

alphabets.splice(4, 3, 'u');
// 4 - from index 4 element 
// 3 - delete 3 elements from index 4 - deletes c , d , e
// 'u' - at index 4 add 'u'
console.log(alphabets);
// output - ['a', 'b', 'x', 'y', 'u', 'f']

alphabets.splice(1, 3);
// 1 - from index 1
// 3 - delete 3 elements from index 1
console.log(alphabets);
// output - ['a', 'u', 'f']

// array slice - create a new array but copy only some part of previous array in new array
// names - ['Dean', 'bob', 'david', 'mark']
const newarray = names.slice(1, 3);
// 1- copy from index 1
// 3 - till 2nd index. 3 is not included - [1,3)
console.log(newarray);
// output -  ['bob', 'david']

// array foreach
// use when
// you want to do something with each element of the array

//dont use when
// you want to stop or break the loop when some condition is true
// when working with async code
const personnames = ['john', 'jenny', 'johnny'];

for(let i = 0; i<personnames.length; i++){
    console.log(i, personnames[i]);
}
// better process - forEach
personnames.forEach((name, i) => console.log(name, i));

// example
let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach((number) => {
    sum += number;
});
console.log(sum);

// array map - it allocates memory in order to store and return values
// array forEach - it does not allocate memory it does not store or return any values
// in array foreach we can modify the original array
// array map returns a new array while leaving the original one in its original state
const inventory = [
    {price: 5, name: 'eggs' },
    {price: 4, name: 'ham'},
    {price: 3, name: 'mayo'},
    {price: 5, name: 'bread'},
];
const prices = inventory.map((item) => item.price);
console.log(prices);
// output - [5, 4, 3, 5]

const items = inventory.map((item) => item.name);
console.log(items);
// output - ['eggs', 'ham', 'mayo', 'bread']

// array filter
// filters certain elements from the array
const numbers1 = [-10, 0, -2, 15, -36, 25];
const positivenumbers = numbers1.filter((number) => number >= 0);
console.log(positivenumbers);

// startup wants to reward employee with more than 7 hours of overtime
const employeesdata = [
    {name: 'Sebasitan', overtime: 5},
    {name: 'Cardi', overtime: 10},
    {name: 'George', overtime: 12}
];
const employeestoreward = employeesdata.filter((employee) => employee.overtime >=7 );
const employeenames = employeestoreward.map((employee) => employee.name);
employeenames.forEach((name) => console.log(`${name} received a reward`));

// array find 
// finds the element in an array that matches the certain condition. returns the first value that satisfies the condition
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = numbers2.find((number) => number > 5);
console.log(value); //6

const states = ['alaksa', 'california', 'colorado', 'hawaii'];
// find the first state that begins with the letter c
const state = states.find((state) => state.startsWith('c'));
console.log(state);

// array includes - the element is there or not in an array
// includes is case sensitive 
const array1 = [1, 23, 3, 4];
console.log(array1.includes(23)); //true 

const pets = ['cats', 'dogs', 'llama'];
console.log(pets.includes('cats')); //true
console.log(pets.includes('at')); //false

const favsubject = ['programming', 'maths', 'physics'];
if(favsubject.includes('maths')){
    console.log('this is my fav subject')
} else {
    console.log('this is not my fav subject');
}

// array sort 

// sorts the array of string alphabetically in ascending order
const cars = ['bmw', 'mercedes', 'audi', 'kia', 'tata'];
cars.sort();
console.log(cars);
// output - ['audi', 'bmw', 'kia', 'mercedes', 'tata']
// sorts the array of string alphabetically in descending order
cars.sort((a, b) => b.localeCompare(a));
console.log(cars);

// sorts the number in ascending order
const numbers3 = [4, 5, 1, 9, 15, 65, 88, 7];
numbers3.sort((a, b) => a - b );
console.log(numbers3);
// output - [1, 4, 5, 7, 9, 15, 65, 88]
// sort the numbers in descending order
numbers3.sort((a, b) => b - a );
console.log(numbers3);
// output - [88, 65, 15, 9, 7, 5, 4, 1]

// array some and every
// array some - returns true if at least one element passes the test
const array2 = [1, 2, 3, 4, 5];
console.log(array2.some((ele) => ele > 3)); // true 

// array every - returns true only if all the elements pass the test
console.log(array2.every((ele) => ele > 3)); // false

// array reduce - we use this when we want to sum the array into single value
const grocerylist = [29, 12, 45, 35, 87, 110];
const total = grocerylist.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(total);

const numbers4 = [1, 2, 3, 4, 5];
const totalsum = numbers4.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(totalsum); //15 