"use strict";

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.onclick = function () {
    alert('Click');
};

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second Click');
});

btn.addEventListener('mouseenter', () => {
    console.log('Hover');
});

btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    // console.log('Hover');
    event.target.remove();
});

//delete listener
let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i === 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});


//Add fucntions for some elements

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement());
});

btn.addEventListener('click', deleteElement, {once: true});