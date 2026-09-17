import { describe, it, expect } from "vitest";
import { 
  validateNumber,
  compareNumbers
 } from "../src/scripts/lottery.js";

describe ("validateNumber", () => {

  it("should return true if the user number is valid", () => {

    const number = 1;
    const result = validateNumber(number);
    expect(result).toBe(true);
  });

  it("should return false if the user number is not valid", () => {

    const number = -1;
    const result = validateNumber(number);
    expect(result).toBe(false);
  });

});

describe ("compareNumbers", () => {

  it("should return true is user numbers is equal to random number", () => {

    const userNumber = 8;
    const randomNumber = 8;
    const result = compareNumbers(userNumber, randomNumber);
    expect(result).toBe(true);

  });

  it("should return false is user numbers is NOT equal to random number", () => {

    const userNumber = 8;
    const randomNumber = 0;
    const result = compareNumbers(userNumber, randomNumber);
    expect(result).toBe(false);

  });



});