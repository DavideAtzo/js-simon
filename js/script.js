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
    const giuste = [];
    const sbagliate = [];
    let arrayGiocatore = [];
    for (let i = 0; i < 5; i++) {
        let inputGiocatore = Number(prompt('Quali numeri hai visto??'));
        arrayGiocatore.push(inputGiocatore);
        console.log(arrayGiocatore);
    }
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray.includes(arrayGiocatore[i])) {
            giuste.push(arrayGiocatore[i]);
        } else {
            sbagliate.push(arrayGiocatore[i]);
        }
    }
    risultato.innerHTML = `Hai indovinato: ${giuste.length} numeri, sono questi: ${giuste}`;
    return giuste;
}

const randomArray = [];
const numeri = document.getElementById('numeri');
const risultato = document.getElementById('risultato');
NumberFor()
numeri.innerHTML = randomArray;
