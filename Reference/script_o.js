// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var charSet = {
    'lcSet': ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    'ucSet': ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
    'numSet': ["0","1","2","3","4","5","6","7","8","9"],
    'speSet': ["@","#","$","%","<","^","<"]
}

function randomKey() {
  var keys = Object.keys(charSet);
  return charSet[keys[ keys.length * Math.random() << 0]];
};

TODO:
// function deleteKey(opt,set) {
//   if (opt===false) {
//     delete charSet.set
//   }
// }

var pwLength = prompt(`Choose a password length between 8 and 129 characters`);

// TODO: Ensure pwLength is in range

var lcOption = confirm(`Would you like to include lowercase characters in your password?`);
if (lcOption===false) {
  delete charSet.lcSet;
}

var ucOption = confirm(`Would you like to include uppercase characters in your password?`);
if (ucOption===false) {
  delete charSet.ucSet;
}

var numOption = confirm(`Would you like to include numeric characters in your password?`);
if (numOption===false) {
  delete charSet.numSet;
}

var speOption = confirm(`Would you like to include special characters in your password?`);
if (speOption===false) {
  delete charSet.speSet;
}

TODO:
// if (lcOption===false && ucOption===false && numOption===false && speOption===false) {
//   alert(`You're not giving us much to work with! Try again and pick at least one of the following: Lowercase, Uppercase, Numeric of Special characters.  `)
// }

// var pw = "";

function randomKeyValue(rk) {
  rk[Math.floor(Math.random() * rk.length)]
}

console.log(randomKeyValue(randomKey()));

// console.log(randomKey()[Math.floor(Math.random() * randomKey().length)]);

// for (var i = 0; i < pwLength; i++) {

//   console.log(pw + randomKey());
    
// }





// function generatePassword() 

//   return randomPW;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

