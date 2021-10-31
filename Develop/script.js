// Assignment code here
var generateBtn = document.querySelector("#generate");
//character variables
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["!", " ", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "_", "^", "`", "{", "}", "|", "~"]

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
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8) {
      alert("Password must be at least 8 characters long.");
      return "";
    }

    if (passwordLength > 128) {
      alert("Password must be less than 129 characters long.");
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