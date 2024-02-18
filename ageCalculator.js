let prompt = require("prompt-sync")();

// get date of birth
let dob = parseInt(prompt("Enter your dob: "));

// get current year
let currentYear = parseInt(prompt("Enter current year: "));

// substract dob from current year
let currentAge = currentYear - dob;

// print result
console.log(`My age is: ${currentAge}`);
