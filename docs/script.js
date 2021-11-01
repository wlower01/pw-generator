// Assignment code here
var generateBtn = document.querySelector("#generate");
//character variables
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const numericalCharacters = "0123456789"; 
const specialCharacters = "`~!@#$%&^*()_-+=|{[}]:;<,>.?/"; 

// Get references to the #generate element
function generatePassword() {
  
  return;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//length selection 
  var passwordLength = prompt("How long would you like your password? Please insert a number between 8 and 128 characters.");
    
    for (var i = 0; i < passwordLength; i++ ) {
      "";
    }
    passwordLength = parseInt(passwordLength);
//passwordLength = passwordLength + password
    if (passwordLength < 8) {
      alert("Password must be at least 8 characters long.");
      return "";
    }

    if (passwordLength > 128) {
      alert("Password must be no more than 128 characters long.");
      return "";
    }
//lowercase character confirmation yes or no
  var lowercaseCharactersOption = confirm("Add lowercase characters to your password?");

    if (lowercaseCharactersOption) {
      password += lowercaseCharacters;
    }

//uppercase character prompt confirmation yes or no
  var uppercaseCharactersOption = confirm("Add uppercase characters to your password?");
    
    if (uppercaseCharactersOption) {
      password += uppercaseCharacters;
    }
//numerical character prompt confirmation yes or no
  var numericalCharactersOption = confirm("Add numbers to your password?");

    if (numericalCharactersOption) {
      password += numericalCharacters;
    }
//special character prompt confirmation yes or no
  var specialCharactersOption = confirm("Add symbols to your password?");

     if (specialCharactersOption) {
       password += specialCharacters;
     }
    

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);