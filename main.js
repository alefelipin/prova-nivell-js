"use strict";

import {
  validateNumber,
  getRandomNumber,
  compareNumbers
} from "./src/scripts/lottery.js"

import {
  showMessage,
  clearInput
} from "./src/scripts/lottery-iu.js"

const history = [];


const input = document.querySelector("#input-id");

const form = document.querySelector("#form-id");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const userNumber = parseInt(input.value);

  // Validation

  const isValid = validateNumber(userNumber);

  if(!isValid) {
    showMessage("message-id", "El número debe estar entre 1 y 10");
  }

  if(isValid) {
    
    // A random number is generated

    const randomNumber = getRandomNumber();


    // Comparison

    const isEqual = compareNumbers(userNumber, randomNumber);

    let result = "";

    if (isEqual) {
      result = "Ganaste";
      
    

    } else {
      result = "Perdiste";
    }

    showMessage("result-id", `${result}`);
    showMessage("message-id", `El número aleatorio generado fue: ${randomNumber}`)

    // Add the try
    
    const newTry = {
      userNumber,
      randomNumber,
      result
    }

    history.push(newTry);

    // Show History (to be implemented): showHistory()

    console.log(history)

  }

   clearInput(input);
  

});





/*

// showHistory() to be implemented;

function showHistory(history) {

const historyToShow = Object.entries(history.[0])

console.log(historyToShow); 

}

let x = showHistory(history);
console.log("Lo que debería mostrar:", x)
*/









