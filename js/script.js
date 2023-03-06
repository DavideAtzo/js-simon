'use strict';

function randomNumber() {
    for (let i = 0; i < 5; i++) {
        randomArray.push(Math.floor((Math.random() * 200) + 1));
        console.log(randomArray[i])
    }
     return randomArray;
}
const randomArray = [];
// document.getElementById("numeri").innerHTML = randomNumber();
randomNumber()