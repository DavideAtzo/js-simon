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
        let numbers = randomNumber(200);
        randomArray.push(numbers);
        console.log(numbers);
    }
}
setTimeout(inputUtente, 5000);
function inputUtente() {
    for (let i = 0; i < 5; i++) {
       let numGiocatore = Number(prompt('Quali numeri hai visto??'));
       arrayGiocatore.push(numGiocatore);
        console.log(arrayGiocatore);
    }

}

let arrayGiocatore =[];
const randomArray = [];
const numeri = document.getElementById('numeri');
NumberFor()
numeri.innerHTML = randomArray;
