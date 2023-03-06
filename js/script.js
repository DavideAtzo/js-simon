'use strict';

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
setTimeout(htmlElement, 3000);
function htmlElement() {
    numeri.innerHTML = '';
}

function NumberFor() {
    for (let i = 0; i < 5; i++) {
        // let randomArray = 
        let numbers = randomNumber(200);
        randomArray.push(numbers);
        console.log(numbers);
    }
}
setTimeout(inputUtente, 4000);
function inputUtente() {
    let numUtente = prompt('inserisci un numero');
    alert('funziona');
}


const randomArray = [];
const numeri = document.getElementById('numeri');
NumberFor()
numeri.innerHTML = randomArray;
