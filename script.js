// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var length = prompt('How long would you like your password to be?');

  var lower = confirm('Would you like the password to have lower case letters?');

  var upper = confirm('Would you like the password to have upper case letters?');

  var special = confirm('Would you like the password to include special characters?');

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
