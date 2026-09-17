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
    const randomNumber = getRandomNumber();

// Comparison between numbers

  const isEqual = compareNumbers(userNumber, randomNumber);
  let result = "";
  if (isEqual) {
    result = "Ganaste";
  } else {
    result = "Perdiste";
  }
  showMessage("result-id", `${result}`);
  showMessage("message-id", `El número aleatorio generado fue: ${randomNumber}`)
  // Adding the try
  
  const newTry = {
    userNumber,
    randomNumber,
    result
  }

  history.push(newTry);

  /* function showHistory(): History has values and keys and it's not possible to be treated like an string. 
    Anyway, it's possible to see it by console
  */
  }

   clearInput(input);
});











