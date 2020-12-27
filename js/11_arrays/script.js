"use strict";

const arr = [1, 33, 24 , 66, 8];

//remove the last element from the array
// arr.pop();
// console.log(arr);

//Add element to the end of the array
arr.push(10);
console.log(arr);

//Loop for array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//For of
for (let value of arr) {
    console.log(value);
}

//For each
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});


//Split

// const str = prompt("", "");
// const products = str.split(', ');
// console.log(products);

//Join
// console.log(products.join('; '));

//Sort
// products.sort();

arr.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}
console.log(arr);