// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);
// arrays
var capitalArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3" , "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "?", ".", "+"];
var generateBtn = document.querySelector("#generate");

var pwlength = " ";
var confirmcapital;
var confirmlower;
var confirmnum;
var confirmspecial;
//prompt when button is pressed
function generatePassword() {
  var pwlength = (prompt("How long would you like your password? Please choose a number between 8 and 128."));
//making sure that the correct number of characters are chosen and if not reminding them what the acceptable range is
  while (pwlength < 8 || pwlength > 128) {
    alert("Password must be between 8 and 128 characters. Please choose a valid number of characters.");
    var pwlength = (prompt("How long would you like your password? Please choose a number between 8 and 128."));
  }
//informing the user of the number of characters they have chosen
  alert("Your password will have " + pwlength + " characters.");


  var confirmcapital = confirm("Would you like capital letters?");
  var confirmlower = confirm("Would you like lower case letters?");
  var confirmnum = confirm("Would you like numbers?");
  var confirmspecial = confirm("Would you like special characters such as !,@,#, etc?");
//asking what type of characters user would like 
    while (confirmcapital === false && confirmlower === false && confirmnum === false && confirmspecial === false) {
      alert("You must choose at least one set of characters.");
      var confirmcapital = confirm("Would you like capital letters?");
      var confirmlower = confirm("Would you like lower case letters?");
      var confirmnum = confirm("Would you like numbers?");
      var confirmspecial = confirm("Would you like special characters such as !,@,#, etc?");

    }

    var pwchar = [];
//adding chosen characters to array
    if (confirmcapital) {
    pwchar = pwchar.concat(capitalArray)
    }

    if (confirmlower) {
      pwchar = pwchar.concat(lowercaseArray)
    }

    if (confirmnum) {
      pwchar = pwchar.concat(numberArray)
    }

    if (confirmspecial) {
      pwchar = pwchar.concat(specialArray)
    }

    console.log(pwchar)
    
    var finalpw = ""
//setting final password by adding characters until chosen number is reached, randomly selecting characters from the chosen sets
    for (var finalLength = 0; finalLength < pwlength; finalLength++) {
      finalpw = finalpw + pwchar[Math.floor(Math.random() * pwchar.length)];
      console.log(finalpw)
    }

    return finalpw

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var pwtext = document.querySelector("#password");

  pwtext.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
