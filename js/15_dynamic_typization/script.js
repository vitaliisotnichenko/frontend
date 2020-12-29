"use strict";

//To String

//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2) Concatenation
console.log(typeof(5 + ''));

const num = 5;
console.log("http://facebook/catalog/" + num);

const fontSize = 26 + 'px';

//To Number
//1)

console.log(typeof(Number('4')));

//2) Unarny plus
console.log(typeof(Number(+'4')));

//3) ParseInt
console.log(typeof(Number(parseInt('15px', 10))));

let answ = +prompt('Hello', '');

//To boolean
//0, '', null, undefined, NaN; - always false, other values - true
// 1)
let switcher = null;

if (switcher) {
    console.log('Working');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof((!!'4')));

