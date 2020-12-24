"use strict";

if (4 === 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49 ) {
    console.log('Error');
} else if (num > 100 ) {
    console.log('A lot');
} else {
    console.log('Ok');
}

//Тернарный оператор
(num === 50) ? console.log('Ok') : console.log('Error');

//Switch
const number = 50;

switch (number) {
    case 49:
        console.log('Mistake');
        break;
    case 100:
        console.log('Mistake');
        break;
    case 50:
        console.log('True');
        break;
    default:
        console.log('Next time');
        break;
}