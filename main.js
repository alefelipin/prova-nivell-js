"use strict";

const history = [  {
    userNumber: 4,
    randomNumber: 7,
    result: "Perdiste"
  }];


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

    console.log(randomNumber);

    // Comparison

    const isEqual = compareNumbers(userNumber, randomNumber);

    let result = "";

    if (isEqual) {
      result = "Ganaste"
      document.querySelector("#result-id").innerText = `${result}`;
      document.querySelector("#message-id").innerText = `El número aleatorio generado fue: ${randomNumber}`;
    // Add the successful try
      const newTry = {
        userNumber,
        randomNumber,
        result
      }

      history.push(newTry);

    // Show History (to be implemented): showHistory(newTry)

    } else {
      result = "Perdiste"
      document.querySelector("#result-id").innerText = `${result}`;
      document.querySelector("#message-id").innerText = `El número aleatorio generado fue: ${randomNumber}`;
    }

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


function compareNumbers(userNumber, randomNumber) {

  if (userNumber === randomNumber) {
    return true;
  } else {
    return false;
  }

}

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






