// These are my arrays
var specialChar = [
  "&",
  ",",
  "!",
  "(",
  ")",
  "_",
  "[",
  "]",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var letterUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var letterLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Declaring my variables
var length;
var confirmSpecialChar;
var confirmNumbers;
var confirmLowercase;
var confirmUppercase;
var choices;
// Start of function that generates password
function passwordOptions() {
  length = prompt(
    "How long do you want your password to be? Please choose a number between 8 and 128."
  );
  // if/else statement regarding the prompt above
  if (!length) {
    alert("Please enter a value between 8 and 128.");
    return;
  }
  //If user enters an incorrect number, this alert will show
  else if (length < 8 || length > 128) {
    alert(
      "Please enter a value between 8 and 128. Click Ok and Generate Password to start again."
    );
    return;
  }
  // If user puts in correct number, these confirm variables will start to pop up
  else {
    confirmSpecialChar = confirm(
      "Ok! Do you want to include special characters in your password?"
    );
    confirmNumbers = confirm(
      "Ok! Do you want to include numbers to your password?"
    );
    confirmLowercase = confirm(
      "Ok! Do you want to include lowercase letters in your password?"
    );
    confirmUppercase = confirm(
      "Ok! Do you want to include any uppercase letters in your password?"
    );
  }
  // If statement for all 4 false answers to the confirm variables above
  if (
    confirmSpecialChar === false &&
    confirmNumbers === false &&
    confirmLowercase === false &&
    confirmUppercase === false
  ) {
    alert("You must choose something to have in your password!");
    return;
  }
  // This object will store the input
  var psswrdOpions = {
    length: length,
    confirmSpecialChar: confirmSpecialChar,
    confirmNumbers: confirmNumbers,
    confirmLowercase: confirmLowercase,
    confirmUppercase: confirmUppercase,
  };
  return psswrdOpions;
}
// This function will get a random element in an array
function createRandom(i) {
  var randomIndex = Math.floor(Math.random() * i.length);
  var randomElement = i[randomIndex];
  return randomElement;
}
function generatePassword() {
  choices = passwordOptions();
  // stores concatenations
  var displayResult = [];
  // store characters for password
  var randomCharacters = [];
  // store user chosen characters
  var chosenCharacters = [];
  
  if (choices.confirmSpecialChar) {
    randomCharacters = randomCharacters.concat(specialChar);
    chosenCharacters.push(createRandom(specialChar));
  }
  if (choices.confirmNumbers) {
    randomCharacters = randomCharacters.concat(numbers);
    chosenCharacters.push(createRandom(numbers));
  }
  if (choices.confirmLowercase) {
    randomCharacters = randomCharacters.concat(letterLower);
    chosenCharacters.push(createRandom(letterLower));
  }
  if (choices.confirmUppercase) {
    randomCharacters = randomCharacters.concat(letterUpper);
    chosenCharacters.push(createRandom(letterUpper));
  }
  for (var i = 0; i < choices.length; i++) {
    var randomCharacter = createRandom(randomCharacters);
    displayResult.push(randomCharacter);
  }
  for (var i = 0; i < chosenCharacters.length; i++) {
    displayResult[i] = chosenCharacters[i];
    return displayResult.join("");
  }
}
// Assignment Code
// Diplays password in the password input
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var pickChoices = generatePassword();
  var passwordTexts = document.querySelector("#password");
  passwordTexts.textContent = pickChoices;
  console.log(pickChoices);
}
generateBtn.addEventListener("click", writePassword);
