"use strict";


const input = document.querySelector("#input-id");

const form = document.querySelector("#form-id");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const userNumber = parseInt(input.value);

  // Validation

  const isValid = validateNumber(userNumber);

  if(!isValid) {
    document.querySelector("#message-id").innerText = "No es válido";
  }

  if(isValid) {
    
    // A random number is generated

    const randomNumber = getRandomNumber();

    console.log(randomNumber)

  }
  

});

function validateNumber(number) {

  if( number < 1 || number > 10 ) {
    return false;
  }

  if ( isNaN(number)) {
    return false;
  }

  return true;

}

function getRandomNumber() {

  const number = Math.ceil((Math.random() * 10));
  
  return number;

}






