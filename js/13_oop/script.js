"use strict";

let str = "some";
let strObj = new String(str);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hi');
    }
};

const john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john.armor);
john.sayHello();

Object.setPrototypeOf(john, soldier);
john.sayHello();

const johny = Object.create(soldier);
johny.sayHello();