// Assignment code here

//function to set password length
var passwordLength = function() {
  var length = "";

  while (length === "" || length === ) {
    length = prompt("How long would you like your password? Please insert a number between 8 and 128 characters.");
  }
  
}

var randomLowercase = ();

var randomUppercase = ();

var randomNumeric = ();

var randomSpecialCharacters = ();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
