//global arrays
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ["!", "$", "#", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//HTML elements
var passwordEl = document.querySelector("#password");
var btngeneratorEl = document.querySelector("#generate");
var btncopyEl = document.querySelector("#copy");

var charLength = 0;


// Assignment Code
var generateBtn = document.querySelector("#generate");

function checkChar() {
  //a prompt for how many characters the user would like
  //must be 8-128 characters 
  var charLength = prompt("How many characters would you like for your password to have?")
  if (charLength < 8 || charLength > 128) {
    alert("Please choose a number between 8 and 128.")
    return;
  } 
  console.log(charLength);
  return charLength;
}



function generatePassword() {
  checkChar();

  //ask the user if they want lowercase
  var lowerCase = confirm("Would you like to include lowercase letters?");
  //ask the user if they want uppercase
  var upperCase = confirm("Would you like to include uppercase letters?");
  //ask the user if they want numeric
  var numChar = confirm("Would you like to include numeric characters?");
  //ask the user if they want special characters 
  var specialChar = confirm("Would you like to include special characters?");

  var types = [];
  var pass = [];
  

  if (lowerCase == true) {
    types = types.concat(lowerCaseLetters);
  }
  if (upperCase == true) {
    types = types.concat(upperCaseLetters);
  }
  if (numChar == true) {
    types = types.concat(numericCharacters);
  }
  if (specialChar == true) {
    types = types.concat(specialCharacters);
  }

  for (i = 0; i < charLength; i++) {
    var randomType = types[Math.floor(Math.random() * types.length)];
    var random = randomType[Math.floor(Math.random() * randomType.length)];
    pass.push(random);
    console.log(random);
  }

  console.log(pass);

  var passString = pass.join("");
  return passString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












