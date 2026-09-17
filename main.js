"use strict";


const input = document.querySelector("#input-id");

const form = document.querySelector("#form-id");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const userInput = parseInt(input.value);

  // Validación

  const isValid = validateNumber(userInput);

  if(!isValid) {
    document.querySelector("#message-id").innerText = "No es válido";
  }

  if(isValid) {
    console.log("es válido")
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

