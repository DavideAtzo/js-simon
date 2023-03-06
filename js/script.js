'use strict';

function randomNumber() {
    let randomArray = [];
    while(randomArray.length < 5){
        const numRandom = Math.floor(Math.random() * 200) + 1;
        randomArray.push(numRandom);
        console.log(numRandom);
        if (!randomArray.includes(numRandom)) {
            randomArray.push(numRandom);
          }
    }
    return randomArray;
}

randomNumber()
