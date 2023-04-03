// Introduction
const single = 'This is a string';
const double = "This is a string";

const backticks = `${2+2}`;
console.log(single);
console.log(double);
console.log(backticks);

const sum = (a, b) => {
    return a + b;
}
const total = `The sum is ${sum(2, 4)}`;
console.log(total);

const greeting = `Hi i'm john, but people call me "Jonny".`
console.log(greeting);

// String length 
const personname = 'Justin';
console.log(personname.length);

// get the element at the certain position of the string 
const firstletter = personname[0];
const lastletter = personname[personname.length - 1];
console.log(firstletter, lastletter);

// change the string case 
// UPPERCASE and lowercase letters
const mixedcasestring = 'Hello! How are you?'
const lowercasestring = mixedcasestring.toLowerCase();
const uppercasestring = mixedcasestring.toUpperCase();
console.log(lowercasestring);
console.log(uppercasestring);

// search a substring
const hobbies = 'I love HTML, CSS and Javascript and CSS';

// indexOf() - finds the index of a first substring in a given string 
const firstindex = hobbies.indexOf('Javascript');
console.log(firstindex);
// output - 21 , returns -1 if substring doesnt exist in the string 

// lastIndexOf() - finds the position of the last occurence of a substring 
const lastindex = hobbies.lastIndexOf('CSS');
console.log(lastindex);

// check only if the substring exist or not - returns true or false.
// includes()
const checkJavascript = hobbies.includes('Javascript');
console.log(checkJavascript);
// output - true

const checkReact = hobbies.includes('React');
console.log(checkReact);
// output - false

//startWith() - does the string starts with this or not 
console.log(hobbies.startsWith('I love')); // true
console.log(hobbies.startsWith('html')); // false

//endsWith() - does the string ends with this or not 
console.log(hobbies.endsWith('CSS')); //true
console.log(hobbies.endsWith('Javascript')); // false

// getting a substring of a string 
// slice()
const word = 'Jim and Jam';
const name1 = word.slice(8, 11); // [8,11)
console.log(name1);

// split a string 
// split()
const examplestring = 'dog';
const letters = examplestring.split('');
console.log(letters);
//output - ['d', 'o', 'g']

// split a sentence into words
const examplestring1 = 'Javascript is quite interesting';
const letters1 = examplestring1.split(' ');
console.log(letters1);
// output - ['Javascript', 'is', 'quite', 'interesting']

// reverse a string 
// reverse() method exist only for array
const string1 = 'Javascript';
const reversedstring = string1.split('').reverse().join('');
console.log(reversedstring); 

// repeat() - if we want to repeat a string n number of times
const dogsays = 'woof';
console.log(dogsays.repeat(5));
//output - woofwoofwoofwoofwoof

//trim() - clean empty spaces using trim method
const email = '    abc@gmail.com  '
console.log(email.trim());

//string exercise

//guests
const guestlist = 'Our guests are: emma, jacob, isabella, ethan';

//1. get the length of the string. store in a variable called length
const length = guestlist.length;
console.log(length); //44

//2. uppercase the entire string.
//store the result in a variable called uppercasedGuestList
const uppercasedGuestList = guestlist.toUpperCase();
console.log(uppercasedGuestList);
//output - OUR GUESTS ARE: EMMA, JACOB, ISABELLA, ETHAN

//3. check whether 'ETHAN' is on the uppercasedGuestList
// Store the answer in a variable called isEthanOnTheList.
// The data type of the variable must be boolean.

const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
console.log(isEthanOnTheList); //true

//4. create a substring that only contains the following 
// EMMA, JACOB, ISABELLA, ETHAN'. 
// Store the answer in a variable called substringGuests
const substringGuests = uppercasedGuestList.slice(16);
console.log(substringGuests);
//output - EMMA, JACOB, ISABELLA, ETHAN

//5. out of the substring you just created 
// create an array of names of people that are on the list
// store that array in a variable called guests
const guests = substringGuests.split(', ');
console.log(guests);
//output - ['EMMA,', 'JACOB,', 'ISABELLA,', 'ETHAN']



















