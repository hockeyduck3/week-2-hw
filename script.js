// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = '';
  
  var length = prompt('How long would you like your password to be?');

  if (length == null || length === '') {
    return;
  } else if (length < 8 || length > 128) {
    alert('Please keep the password between 8 and 128 characters.');
    writePassword();
  } else {
    length = parseInt(length);

    if (isNaN(length)){
      alert("Please make sure you're typing in a number.")
      writePassword();
    } else {
        var upper = confirm('Would you like the password to have upper case letters?');
    
        var special = confirm('Would you like the password to include special characters?');
    
        var numbers = confirm('Finally, would you like the password to include numbers?');
    
        var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        var lowerSet = "abcdefghijklmnopqrstuvwxyz";
    
        var specialSet = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
    
        var numbersSet = '1234567890';
    
        if (upper === true) {
          lowerSet = lowerSet.concat(upperSet);
        } if (special === true) {
          lowerSet = lowerSet.concat(specialSet);
        } if (numbers === true ) {
          lowerSet = lowerSet.concat(numbersSet);
        }
    
        function passwordMaker() {
          for (var i = 0; i < length; i++) {
            password += (lowerSet.charAt(Math.floor(Math.random() * lowerSet.length)));
          }
        }
      }
    }


  passwordMaker();

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
