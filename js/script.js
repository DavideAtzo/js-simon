'use strict';



function randomNumber() {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
        randomArray.push(Math.floor((Math.random() * 5) + 1));
        console.log(randomArray)
            return randomArray;
      }

}

randomNumber()
