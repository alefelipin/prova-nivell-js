"use strict";

import {
  validateNumber,
  getRandomNumber,
  compareNumbers
} from "./src/scripts/lottery.js"

import {
  showMessage
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
    showMessage("message-id", "No es válido");
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

    // Show History (to be implemented): showHistory(newTry)

    console.log(history)

  }
  

});








console.log(history)

// showHistory() to be implemented;

/*function showHistory(newTry) {

const ul = document.querySelector("#history-id");
const li = document.createElement("li");

li.textContent = newTry.userNumber;
  ul.appendChild(li);
       
}


let x = showHistory(history);
console.log("Lo que debería mostrar:", x)

*/






