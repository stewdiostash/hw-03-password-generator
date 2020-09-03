function generatePassword() {
  
  // variables
  var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numberSet = ["0","1","2","3","4","5","6","7","8","9"];
  var specialSet = ["@","#","$","%","<","^","<"];
  var masterSet = [];
  var randomPassword = "";
  var pwLength = 0;
  var lowercaseChoice = false;
  var uppercaseChoice = false;
  var numberChoice = false;
  var specialChoice = false;
  

  // define password length
  pwLength = prompt(`Choose a password length between 8 and 129 characters`);

  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt(`Try again! Password length must be between 8 and 129 characters`);
  } 

  // select character sets to add to masterSet
  while (lowercaseChoice===false && uppercaseChoice===false && numberChoice===false && specialChoice===false) {
    alert(`You must select one or more character sets to compose your password. Press "okay" to continue.`)

    var lowercaseChoice = confirm(`Include lowercase characters?`);
    if (lowercaseChoice) {
      masterSet.push.apply(masterSet, lowercaseSet);
    }
    var uppercaseChoice = confirm(`Include uppercase characters?`);
    if (uppercaseChoice) {
      masterSet.push.apply(masterSet, uppercaseSet);
    }
    var numberChoice = confirm(`Include numeric characters?`);
    if (numberChoice) {
      masterSet.push.apply(masterSet, numberSet);
    }
    var specialChoice = confirm(`Include special characters?`);
    if (specialChoice) {
      masterSet.push.apply(masterSet, specialSet);
    }
  }

  // compose and print random password
  for (var i = 0; i < pwLength; i++) {
    randomPassword = randomPassword + masterSet[Math.floor(Math.random() * masterSet.length)]; 
    document.querySelector("#password").value = randomPassword;
  }
}