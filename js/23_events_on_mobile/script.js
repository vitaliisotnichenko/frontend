//touchstart

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        console.log('Start');
        console.log(event.touches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log('Move');
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();
        console.log('End');
    });
    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log(event.targetTouches[0].pageX);
    });

});
