"use strict";

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 5));

//Function expression

const logger = function () {
    console.log('Hello');
};
logger();

//Arrow function
const calculator = (a, b) => {
    return a + b;
};