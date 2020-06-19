//global variables
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ["!", "$", "#", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var correctPrompt = getPrompts();
  if (correctPrompt) {
    var password = generatePassword();
    passwordText.value = password;
    passwordText.setAttribute("class","password");
  } else {
    passwordText.value = "";
    passwordText.setAttribute("class", "");
  }
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";
}
  

function generatePassword() {

function passwordCriteria() {
  //a prompt for how many characters the user would like
  //must be 8-128 characters 
  charLength = prompt("How many characters would you like for your password to have?");
  if (charLength < 8 && charLength > 128) {
    alert("Please choose a number between 8 and 128.")
    return;
  } else {
    //ask the user if they want lowercase
    lowerCase = confirm("Would you like to include lowercase letters?");

    //ask the user if they want uppercase
    upperCase = confirm("Would you like to include uppercase letters?");

    //ask the user if they want numeric
    numChar = confirm("Would you like to include numeric characters?");

    //ask the user if they want special characters 
    specialChar = confirm("Would you like to include special characters?");
    return true;
  }
}  
  









passwordText.value = password;




