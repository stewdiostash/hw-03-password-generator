// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  
  // variables
  var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numberSet = ["0","1","2","3","4","5","6","7","8","9"];
  var specialSet = ["@","#","$","%","<","^","<"];
  var masterSet = [];
  var randomPassword = "";
  var pwLength = 0;
  
  // // functions
  // function selectSets(){
  //   // user selects which character sets to include
  //   var lowercaseChoice = confirm(`Would you like to include lowercase characters in your password?`);
  //   if (lowercaseChoice) {
  //     masterSet.push.apply(masterSet, lowercaseSet);
  //   }
  //   var uppercaseChoice = confirm(`Would you like to include uppercase characters in your password?`);
  //   if (uppercaseChoice) {
  //     masterSet.push.apply(masterSet, uppercaseSet);
  //   }
  //   var numberChoice = confirm(`Would you like to include numeric characters in your password?`);
  //   if (numberChoice) {
  //     masterSet.push.apply(masterSet, numberSet);
  //   }
  //   var specialChoice = confirm(`Would you like to include special characters in your password?`);
  //   if (specialChoice) {
  //     masterSet.push.apply(masterSet, specialSet);
  //   }
  // };

    // define password length
  pwLength = prompt(`Choose a password length between 8 and 129 characters`);


  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt(`Try again! Password length must be between 8 and 129 characters`);
  } 

  var lowercaseChoice = confirm(`Would you like to include lowercase characters in your password?`);
  if (lowercaseChoice) {
    masterSet.push.apply(masterSet, lowercaseSet);
  }
  var uppercaseChoice = confirm(`Would you like to include uppercase characters in your password?`);
  if (uppercaseChoice) {
    masterSet.push.apply(masterSet, uppercaseSet);
  }
  var numberChoice = confirm(`Would you like to include numeric characters in your password?`);
  if (numberChoice) {
    masterSet.push.apply(masterSet, numberSet);
  }
  var specialChoice = confirm(`Would you like to include special characters in your password?`);
  if (specialChoice) {
    masterSet.push.apply(masterSet, specialSet);
  }

  while (lowercaseChoice===false && uppercaseChoice===false && numberChoice===false && specialChoice===false) {
    alert(`You're not giving us much to work with! Try again and pick at least one of the following: Lowercase, Uppercase, Numeric of Special characters.`)

    var lowercaseChoice = confirm(`Would you like to include lowercase characters in your password?`);
    if (lowercaseChoice) {
      masterSet.push.apply(masterSet, lowercaseSet);
    }
    var uppercaseChoice = confirm(`Would you like to include uppercase characters in your password?`);
    if (uppercaseChoice) {
      masterSet.push.apply(masterSet, uppercaseSet);
    }
    var numberChoice = confirm(`Would you like to include numeric characters in your password?`);
    if (numberChoice) {
      masterSet.push.apply(masterSet, numberSet);
    }
    var specialChoice = confirm(`Would you like to include special characters in your password?`);
    if (specialChoice) {
      masterSet.push.apply(masterSet, specialSet);
    }
  }

  for (var i = 0; i < pwLength; i++) {
    randomPassword = randomPassword + masterSet[Math.floor(Math.random() * masterSet.length)]; 
    document.querySelector("#password").value = randomPassword;
  }

}

// function writePassword() {
//   var password = generatePassword();
//   document.querySelector("#password").value = password;
// }


// console.log(randomPassword);
  // return value;







// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);