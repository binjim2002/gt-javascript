// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3","4", "5","6","7", "8", "9"];
var specialCharacters = ["!", "@","#","$","%", "^","&", "*", "(", ")", "_", "-","+", "=", "{", "}", "[", "]","?",":", ";", "<", ">", "/",",", "."];
var UpperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R","S", "T", "U","V","W","X", "Y", "Z"];

// Write password to the #password input
//user need to specify the length and the type of Characters that they need to use
var possibleCharacters = []
 
  

 
function generatePassword() {
  var length = prompt("how many character do you want for your password?")
  if (length < 8 ){
    alert("Your password is too short")
return

  }
  if (length > 128 ){
    alert("Your password is too long")
    return 
  }
  console.log(length)
var hasLowercaseLetters = confirm("Do you want your password to have Lower case letters?")
  console.log(hasLowercaseLetters)
  var hasUpperCaseLetters = confirm("Do you want your password to have Upper case letters?")
  console.log(hasUpperCaseLetters)
  var hasspecialCharacters = confirm("Do you want your password to have special Character letters?")
  console.log(hasspecialCharacters)
  var hasnumbers = confirm("Do you want your password to have numbers?")
  console.log(hasnumbers)

  
  if ( hasLowercaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters)
  }

  // 1. Add if conditions for hasUpperCaseLEtters
if ( hasUpperCaseLetters) {
  possibleCharacters = possibleCharacters.concat(UpperCaseLetters)
}
  // 2. Add if conditions for hasSpecialCharacters
  if ( hasspecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  } 

var newPassword = "";
 
  for (var i=0; i<length; i++){
    // 4. Run this loop Each time, grab a random number.
    var randomCharacterIndex = Math.floor(Math.random()*possibleCharacters.length)
    var randomCharacter = possibleCharacters[randomCharacterIndex]
    console.log(randomCharacter)
    newPassword += randomCharacter

    // 5. Use that number to pick a character from the possibleCharacters array
    // 6. Add it to a newPassword
  }
// 7. Return the new string here, instead of the hardcoded value "newPassword"
  return newPassword
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
