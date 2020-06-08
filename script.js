// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3","4", "5","6","7", "8", "9"];
var specialCharacters = ["!", "@","#","$","%", "^","&", "*", "(", ")", "_", "-","+", "=", "{", "}", "[", "]","?",":", ";", "<", ">", "/",",", "."];
var UpperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R","S", "T", "U","V","W","X", "Y", "Z"];

// Write password to the #password input
//user need to specify the length and the type of Characters that they need to use

function getUserChoice() {
  var length = prompt("how character do you want for your password?")
  console.log(length)
var hasLowercaseLetters = confirm("Do you want your password to have Lower case letters?")
  console.log(hasLowercaseLetters)
  var hasUpperCaseLetters = confirm("Do you want your password to have Upper case letters?")
  console.log(hasUpperCaseLetters)
  var hasspecialCharacters = confirm("Do you want your password to have special Character letters?")
  console.log(hasspecialCharacters)
  var hasnumbers = confirm("Do you want your password to have numbers?")
  console.log(hasnumbers)

  if (length < 8 ){
    alert("Your password is too short")

  }
  if (length > 128 ){
    alert("Your password is too long")
    
  }

} 

getUserChoice()
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
