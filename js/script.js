'use strict';

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
function NumberFor() {
    for (let i = 0; i < 5; i++) {
        // let randomArray = 
        let numbers = randomNumber(200);
        randomArray.push(numbers);
        console.log(numbers);
    }
}
setTimeout(htmlElement, 3000);
function htmlElement() {
    document.getElementById("numeri").innerHTML = randomArray;
}
const randomArray = [];

NumberFor()
htmlElement()
