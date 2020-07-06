//global arrays
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ["!", "$", "#", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Empty Arrays 
var charLength = "";
var types = [];
var pass = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for prompts
function promptCriteria() {
  // a prompt for how many characters the user would like
    // must be 8-128 characters
    // store it in a variable
  charLength = parseInt(prompt("How many characters would you like for your password to have?"));
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Please choose a number between 8 and 128.")
    return false;
  };
  //ask the user if they want lowercase
  if (confirm("Would you like your password to contain uppercase values?")) {
    types = types.concat(upperCaseLetters);
  }
  //ask the user if they want uppercase
  if (confirm("Would you like your password to contain lowercase values?")) {
    types = types.concat(lowerCaseLetters);
  }
  //ask the user if they want numeric
  if (confirm("Would you like your password to contain numbers?")) {
    types = types.concat(numericCharacters);
  }
  //ask the user if they want special characters 
  if (confirm("Would you like your password to contain special characters?")) {
    types = types.concat(specialCharacters);
  }
  return true;
};

// Function to generate the password based on the selected criteria
function generatePassword() {
  // prompts
  promptCriteria();
  // Randomly generate password
  var password = "";
  // For Loop to randomly select index 
  for (i = 0; i < charLength; i++) {
    var randomize =  (Math.floor(Math.random() * types.length));
    console.log(randomize);
    password += types[randomize];
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












