'use strict';

function randomNumber(max) {
    let randomArray = [];
    while(randomArray.length < 5){
        const numRandom = Math.floor(Math.random() * 5) + 1;
        randomArray.push(numRandom);
        console.log(numRandom);
    }
    return randomArray;
    // for (let i = 0; i < 5; i++) {
    //     randomArray.push(Math.floor((Math.random() * 5) + 1));
    //     console.log(randomArray)
    //         return randomArray;
    //   }
}

randomNumber()
