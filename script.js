// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var length = prompt('How long would you like your password to be?');

  // This will check and see if the user hit cancel on the first prompt and return nothing if true.
  if (length == null || length === '') {
    return;
  }

  // If the user didn't hit cancel, then this will check and see if the user's input is between 8 and 128 characters and will alert them if it's not.
  else if (length < 8 || length > 128) {
    alert('Please keep the password between 8 and 128 characters.');
    writePassword();
  }
   
  // If the user's input is between 8 and 128 characters, then it will change their input into a number and check to see if it is a number or NaN. If it's NaN then the user will be alerted.
  else {
    length = parseInt(length);

    if (isNaN(length)){
      alert("Please make sure you're typing in a number.")
      writePassword();
    } 
    // If the user's input passes through all of these if's, then the rest of the code will run.
    else {
        var lower = confirm('Would you like the password to have lower case letters?');

        // This will alert the user whether or not lowercase letters will be used depending on their answer to the confirm above.
        if (lower === true){
          alert('lower case letters will be added!');
        } else {
          alert('lower case letters will not be added.');
        }

        var upper = confirm('Would you like the password to have upper case letters?');

        // This will alert the user whether or not uppercase letters will be used depending on their answer to the confirm above.
        if (upper === true){
          alert('Upper case letters will be added!');
        } else {
          alert('Upper case letters will not be added.');
        }
    
        var numbers = confirm('Would you like the password to include numbers?');

        // This will alert the user whether or not numbers will be used depending on their answer to the confirm above.
        if (numbers === true){
          alert('Numbers will be added!');
        } else {
          alert('Numbers will not be added.');
        }

        var special = confirm('Finally, would you like the password to include special characters?');

        // This will alert the user whether or not special characters will be used depending on their answer to the confirm above.
        if (special === true){
          alert('Special characters will be added!');
        } else {
          alert('Special characters will not be added.');
        }

        // If the user clicks cancel on all of the confirms, then they're alerted to choose at least one category and the function starts again.
        if (lower === false && upper === false && numbers === false && special === false) {
          alert('Please choose at least one character for your password.');
          writePassword();
        }

        var password = '';
    
        var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        var lowerSet = "abcdefghijklmnopqrstuvwxyz";
    
        var specialSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    
        var numbersSet = '1234567890';
    
        // Empty string that will be used for the password.
        var characters = '';

        // If the user clicks ok on lower, then lowerSet will be added to characters.
        if (lower === true){
          characters = characters.concat(lowerSet);
        }

        // If the user clicks ok on upper, then upperSet will be added to characters.
        if (upper === true) {
          characters = characters.concat(upperSet);
        }

        // If the user clicks ok on numbers, then numbersSet will be added to characters.
        if (numbers === true ) {
          characters = characters.concat(numbersSet);
        }

        // If the user clicks ok on special, then specialSet will be added to characters.
        if (special === true) {
          characters = characters.concat(specialSet);
        }
    
        // This function will then take the string of characters and randomly pick characters from that string and at it to password.
        function passwordMaker() {
          for (var i = 0; i < length; i++) {
            password += (characters.charAt(Math.floor(Math.random() * characters.length)));
          }
        }
      }
    }

  
  passwordMaker();

  function passwordChecker() {
    // Just in case if the password does not meet the met criteria these if statements should rerun passwordMaker until a password meets the criteria.
    if (lower) {
      // Just in case if the password does not have a lowercase letter even though lower = true.
      if (password.match(/[a-z]/) == null) {
        console.log(`${password} did not include a lowercase letter`);
        password = '';
        passwordMaker();
        passwordChecker();
      }
    }

    if (upper) {
      // Just in case if the password does not have a uppercase letter even though upper = true.
      if (password.match(/[A-Z]/) == null) {
        console.log(`${password} did not include an uppercase letter`);
        password = '';
        passwordMaker();
        passwordChecker();
      }
    }

    if (numbers) {
      // Just in case if the password does not have any numbers even though number = true.
      if (password.match(/[0-9]/) == null) {
        console.log(`${password} did not include a number`);
        password = '';
        passwordMaker();
        passwordChecker();
      }
    }

    if (special) {
      // Just in case if the password does not have any special characters even though special = true.
      if (password.match(/["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/) == null) {
        console.log(`${password} did not include a special character`);
        password = '';
        passwordMaker();
        passwordChecker();
      }
    }
  }

  passwordChecker();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
