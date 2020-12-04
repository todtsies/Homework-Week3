// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTexts = document.querySelector("#password");

  passwordTexts.value = password;

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
var choices;
var pickChoices 

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
  };

  // If statement for all 4 false answers to the confirm variables above
  if (confirmSpecialChar === false && confirmNumbers === false && confirmLowercase === false && confirmUppercase === false)  {
    choices = alert('You must choose something to have in your password!');
  }
  
  // Else if statement for 4 true answers
  else if (confirmSpecialChar === true && confirmNumbers === true && confirmLowercase === true && confirmUppercase === true) {
    choices = specialChar.concat(letterLower, letterUpper, numbers);
  }
  
  // Else if for 3 positive answers
  else if (confirmSpecialChar && confirmNumbers && confirmLowercase) {
    choices = specialChar.concat(numbers, letterLower);
  }
  else if (confirmSpecialChar && confirmNumbers && confirmUppercase) {
    choices = specialChar.concat(numbers, letterUpper);
  }
  else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    choices = numbers.concat(letterLower, letterUpper);
  }
  else if (confirmSpecialChar && confirmLowercase && confirmUppercase) {
    choices = specialChar.concat(letterLower, letterUpper);
  }
  
  //Else if for 2 positive answers
  else if (confirmSpecialChar && confirmNumbers) {
    choices = specialChar.concat(numbers);
  }
  else if (confirmSpecialChar && confirmUppercase) {
    choices = specialChar.concat(letterUpper);
  }
  else if (confirmSpecialChar && confirmLowercase) {
    choices = specialChar.concat(letterLower);
  }
  else if (confirmNumbers && confirmLowercase) {
    choices = numbers.concat(letterLower);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = letterLower.concat(letterUpper);
  }
  else if (confirmNumbers && confirmUppercase) {
    choices = numbers.concat(letterUpper);
  }
  
  //Else if for 1 positive answer
  else if (confirmSpecialChar) {
    choices = specialChar;
  }
  else if (confirmLowercase) {
    choices = letterLower;
  }
  else if (confirmUppercase) {
    choices = letterUpper;
  }
  else if (confirmNumbers) {
    choices = numbers;
  };

// Start random selection of the variables
for (var i = 0; i < length; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  console.log(pickChoices);
}
return pickChoices;
  


}



  //
 
