"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
options.makeTest();
console.log(Object.keys(options));
console.log(Object.keys(options).length);

console.log(options.name);
// Delete object property
// delete options.name;
//

let counter =0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has value ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Property ${key} has value ${options[key]}`);
        counter++;
    }
}
console.log(counter);

//Destructorization

const {border, bg} = options.colors;
console.log(border);
console.log(bg);