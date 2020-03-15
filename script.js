// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = '';
  
  var length = prompt('How long would you like your password to be?');

  var lower = confirm('Would you like the password to have lower case letters?');

  var upper = confirm('Would you like the password to have upper case letters?');

  var special = confirm('Would you like the password to include special characters?');

  var numbers = confirm('Finally, would you like the password to include numbers?');

  var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var lowerSet = "abcdefghijklmnopqrstuvwxyz";

  var specialSet = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;

  function passwordMaker() {
    console.log(length);
    for (var i = 0; i < length; i++) {
      if (lower === true) {
        password += (lowerSet.charAt(Math.floor(Math.random() * length)))
      }
      if (upper === true) {
        password += (upperSet.charAt(Math.floor(Math.random() * length)))
      }
      if (special === true) {
        password += (specialSet.charAt(Math.floor(Math.random() * length)))
      }
      if (numbers === true) {
        password += (Math.floor(Math.random() * length))
      }
    }
  }
  passwordMaker();
  console.log(password);
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
