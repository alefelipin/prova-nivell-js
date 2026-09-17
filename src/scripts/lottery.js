"use strict";

export function validateNumber(number) {

  if( number < 1 || number > 10 ) {
    return false;
  }

  if ( isNaN(number)) {
    return false;
  }

  return true;
}

export function getRandomNumber() {

  const number = Math.ceil((Math.random() * 10));
  return number;

}

export function compareNumbers(userNumber, randomNumber) {

  if (userNumber === randomNumber) {
    return true;
  } else {
    return false;
  }

}
