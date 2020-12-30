"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: yellow; width: 400px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//Loop
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

//Foreach
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('new text');


div.classList.add('black');

//Add div to the end of the body
document.body.append(div);

//Add div to the wrapper element
document.querySelector('.wrapper').append(div);

//Add div tag to the beginning
wrapper.prepend(div);

//use before method
hearts[0].before(div);

//use after method
hearts[0].after(div);

//remove element
circles[0].remove();

//replace element
hearts[0].replaceWith(circles[0]);

//add text to element
div.innerHTML = 'Hello world';

div.innerHTML = "<h1>Hello world</h1>";

//add text using text content
div.textContent = 'Hello';

//insert code before element
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');

//вставка кода в начало нашего элемента
div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');

//вставка кода в конец нашего элемента
div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');

//вставка кода после нашего элемента
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');