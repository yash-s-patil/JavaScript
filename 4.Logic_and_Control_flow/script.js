// if, else if, else statements
const age = 18;
if (age > 18) {
    console.log('You may enter');
} else if (age === 18) {
    console.log('You just turned 18, welcome');
} else {
    console.log('You are not allowed');
}

// truthy and falsy values
// falsy values - false, 0, '', null, undefined, NaN
// truthy values - true, 1, 'hello', 5, 123, {}, []
if (false) {
    console.log('ok');
} else {
    console.log('not ok');
}
if ('hi') {
    console.log('ok');
} else {
    console.log('not ok');
}

// logical operators - part 2
const age1 = 19;
const isCool = true;

// is cool and is above the age of 18
if (isCool && age1 > 18){
    console.log('You may enter');
} else {
    console.log('You cannot enter');
}

// switch statement 
const superhero = 'Captain America';
switch (superhero) {
    case 'Iron Man':
        console.log('I am Iron Man');
        break;
    case 'Thor':
        console.log('That is my hammer');
        break;
    case 'Captain America':
        console.log('Never give up');
        break;
    case 'Black Widow':
        console.log('One shot one kill');
        break;
    default:
        console.log('Enter a valid superhero name');
}

// ternary operator
const age2 = 18;
age2 >= 18 ? console.log('You can drive') : console.log('You cannot drive')

// loop - while and for
let i = 0; 
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}