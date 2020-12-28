"use script";

let a = 5;
let b = a;
b = b + 5;
console.log(b);
console.log(a);
//Output
// 10
// 5


const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);

//Output
// { a: 10, b: 1 }
// { a: 10, b: 1 }


function copyObj(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const number = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 10
    }
};

const newNumbers = copyObj(number);
newNumbers.a = 10;
console.log(newNumbers);

newNumbers.c.x = 10;
console.log(newNumbers);
console.log(number);

//Output
// { a: 10, b: 5, c: { x: 10, y: 10 } }
// { a: 2, b: 5, c: { x: 10, y: 10 } }

//Object assign
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(number, add));
//Output
// { a: 2, b: 5, c: { x: 10, y: 10 }, d: 17, e: 20 }

//Create copy object through Object assign
console.log(Object.assign({}, add));

//Output
// { d: 17, e: 20 }

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

//Output
// { d: 17, e: 20 }
// { d: 20, e: 20 }


//ARRAY
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'testing';
console.log(newArray);
console.log(oldArray);

//Spread
const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'twitter', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

//Copy using spread operator
const arr = ['a', 'b'];
const newArr = [...arr];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(q);
console.log(newObj);
