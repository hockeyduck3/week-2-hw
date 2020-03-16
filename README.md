# week-3-hw

For this assignment I had to take some pre-existing code for a password generator and make it functional. 

* In the script.js file, I first added the prompts/confirms that would ask the user what kind of password they wanted.

* Next I added some if statements to make sure of things like, if the length of the password was between 8 and 128 characters, and if the string they pass in for the length is indeed a number.

* There are also if statements that check the user's response and alerts them if for example, lowercase letters will be used or not.

* After the user makes their selection, the code then goes in and makes a new string of characters depending on what the user selected.

* After the character string is made then there is a for loop that goes in and randomly picks out a character in the character string using the Math.random method and adds that to a new empty string of password.

* Finally before the newly made password is presented to the user it goes through a function called passwordChecker. In there there are four if statements that check the password to make sure it meets the criteria that the user wanted. If a password does not meet the criteria then that password is deleted and a new one is made. 

* That final process happens as many times as needed until the password meets the user's criteria and is then presented to the user on the text area in front of them.