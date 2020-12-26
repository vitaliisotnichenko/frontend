'use strict';

const str = "Test";
const arr = [1, 2, 3];
console.log(str.length);
console.log(arr.length);

//Get part of string through the index
console.log(str[2]);

//Change string registr
console.log(str.toUpperCase());
console.log(str.toLowerCase());


//Поиск подстроки
const fruit = "Some fruit";
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

//Изменения строки
const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

//Substring
console.log(logg.substring(6, 11));

//Substr
console.log(logg.substr(6, 5));


//Numbers
//Round
const num = 12.2;
console.log(Math.round(num));

//Строки в числа преобразование
const testString = "12.2px";
console.log(parseInt(testString));
console.log(parseFloat(testString));
