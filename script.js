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
        var lower = confirm('Would you like the password to have lower case letters?');

        if (lower === true){
          alert('lower case letters will be added!');
        } else {
          alert('lower case letters will not be added.');
        }

        var upper = confirm('Would you like the password to have upper case letters?');

        if (upper === true){
          alert('Upper case letters will be added!');
        } else {
          alert('Upper case letters will not be added.');
        }
    
        var numbers = confirm('Would you like the password to include numbers?');

        if (numbers === true){
          alert('Numbers will be added!');
        } else {
          alert('Numbers will not be added.');
        }

        var special = confirm('Finally, would you like the password to include special characters?');

        if (special === true){
          alert('Special characters will be added!');
        } else {
          alert('Special characters will not be added.');
        }

        if (lower === false && upper === false && numbers === false && special === false) {
          alert('Please choose at least one character for your password.');
          writePassword();
        }
    
        var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        var lowerSet = "abcdefghijklmnopqrstuvwxyz";
    
        var specialSet = `!@#$%^&*(){}[]=<>/,.`;
    
        var numbersSet = '1234567890';
    
        var characters = '';

        if (lower === true){
          characters = characters.concat(lowerSet);
        } if (upper === true) {
          characters = characters.concat(upperSet);
        } if (special === true) {
          characters = characters.concat(specialSet);
        } if (numbers === true ) {
          characters = characters.concat(numbersSet);
        }
    
        function passwordMaker() {
          for (var i = 0; i < length; i++) {
            password += (characters.charAt(Math.floor(Math.random() * characters.length)));
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
