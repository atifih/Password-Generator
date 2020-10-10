// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordOptions() {
  // Prompt the user for the length of  the password requested.
  var length = prompt("What length should the password be?");

  // Validate user input for  the ddsired password length.
  // Convert length to integer so mathematical comparison may proceed.
  var testLength = parseInt(length, 10);
  console.log(testLength);
  console.log(length);


  if (testLength < 8 || testLength > 128)
    // input is invalid.
    return;
  else {

    // length  is valid)


    // Query the user for their criteria.
    var upperCharacter = confirm("Do you wish to include uppercase ccharacters?");
    var lowerCharacter = confirm("Do you wish to include lowercase characters?");
    var numberCharacter = confirm("Do you wish to include numeric characters?");
    var specialCharacter = confirm("Do you wish to include special charscters?");
    // Validate user input.
    if (!upperCharacter && !lowerCharacter && !numberCharacter && !specialCharacter) {
      return; // User must select atleast one password option.
    }


    // Build a passwordOptions object for the purpose of benerating a password.
    var passwordOptions = {
      pLength: testLength,
      upper: upperCharacter,
      lower: lowerCharacter,
      number: numberCharacter,
      special: specialCharacter

    }



    // return the passwordOptions object for generating a password.
    console.log("Password length is:", passwordOptions.pLength);
    console.log("Special Char selected?", passwordOptions.special);
    return passwordOptions;
  } // end-else
}



function generatePassword() {
  // Retrieve  the passwordOptions object 
  //var userOptions = {};

  var userOptions = passwordOptions();

  var passwordArray = [];
  //  var concatenatedArray=[];
  var tempArray1 = [];
  var tempArray2 = [];
  var tempArray = [];
  var potentialchars = [];
  var potential = [];

  if (userOptions.upper) {
    // Append generated uppercase character to end of generated password.
    potentialchars = potentialchars.concat(upperCasedCharacters);
    console.log(upperCasedCharacters);
  }



  if (userOptions.lower) {
    // Append generated lowercase character to end of generated password.

    potentialchars = potentialchars.concat(lowerCasedCharacters);
  }

  if (userOptions.number) {
    // Append generated number character to end of generated password.
    // potentialchars += numericCharacters;
    potentialchars = potentialchars.concat(numericCharacters);
  }
  if (userOptions.special) {
    //Append generated number character to end of generated password.
    potentialchars = potentialchars.concat(specialCharacters);
  }



  // Loop the array
  for (var i = 0; i < userOptions.pLength; i++) {

    console.log("password length in for loop: pLength = ", userOptions.pLength);

    passwordArray = passwordArray.concat(potentialchars[(Math.floor(Math.random() * potentialchars.length))]);



    console.log("For loop counter var:", i);

  } // end-for loop
  console.log("Password generated is: ", passwordArray);
  //alert (passwordArray);

  return passwordArray.join("");
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

