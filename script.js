// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// These are my arrays
var specialChar = ["&", ",", "!", "(", ")", "_", "[", "]", "%", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Declaring my variables
var length = " ";
var confirmSpecialChar;
var confirmNumbers;
var confirmLowercase;
var confirmUppercase;

//Start of function that generates password
function generatePassword() {
  length = prompt('How long do you want your password to be? Please choose a number between 8 and 128.');
  // if/else statement regarding the prompt above
  if (!length) {
    alert('Please enter a value between 8 and 128.');
  }
  //If user enters an incorrect number, this alert will show
  else if (length < 8 || length > 128) {
    alert('Please enter a value between 8 and 128. Click Ok and Generate Password to start again.');
  }
  // If user puts in correct number, these confirm variables will start to pop up
  else {
    confirmSpecialChar = confirm('Ok! Do you want to include special characters in your password?');
    confirmNumbers = confirm('Ok! Do you want to include numbers to your password?');
    confirmLowercase = confirm('Ok! Do you want to include lowercase letters in your password?');
    confirmUppercase = confirm('Ok! Do you want to include any uppercase letters in your password?');
  }
};

  // If else statement for all 4 false answers to the confirm variables above
  if (confirmSpecialChar === false && confirmNumbers === false && confirmLowercase === false && confirmUppercase === false);  {
    alert('You must choose something to have in your password!');
  }

  //