"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

// Object
const obj= {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);
console.log(obj["age"]);

//Array
let arr = ["plum.png", "orange.jpg", "apple.bnp"];
console.log(arr[1]);



const answers = [];

answers[0] = prompt("What's your name", "");
answers[1] = prompt("What's your surname", "");
answers[2] = prompt("What's your age", "");