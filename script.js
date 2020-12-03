// Assignment Code and added event listener to generate button
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// These are my arrays
let specialChar = ["&", ",", "!", "(", ")", "_", "[", "]", "%", "*", "+", "-", ".", "/", "<", ">", "?","~"];
let letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Declaring my variables
let confirmLength = " ";
let confirmSpecialChar;
let confirmNumbers;
let confirmLowercase;
let confirmUppercase;

//First prompt to confirm how many characters the user would like
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));















































































// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



