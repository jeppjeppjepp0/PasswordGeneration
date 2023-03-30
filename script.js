// Assignment Code (provided)
var generateBtn = document.querySelector("#generate");

//character lists
var listUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var listLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var listNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var listChars = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '\,', '-', '\.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

//characters to include in password
var fullCharList = [];

//user entry
var userLength = 0;

//password specifics
var passLength = 0;
var charIncluded = {
    incUpper: false,
    incLower: false,
    incNums: false,
    incChars: false
};

// write generated password to screen (provided)
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    //password variable initialized as empty string
    var password = "";
    var randIndex = 0;
    passwordPrompts();
    createCharList();

    //generate password (fill empty string)
    for (var i = 0; i < passLength; i++){
        //generates a random index within the full characters' list
        randIndex = Math.floor(Math.random() * fullCharList.length);

        //adds the generated character to the end of the password string
        password = password.concat(fullCharList[randIndex]);
    }

    return password;
}

function passwordPrompts() {
    //determine password length
    lengthPrompt();

    //determine password chars
    charsPrompt();
}

function lengthPrompt() {
    userLength = prompt("Enter a password length between 8-128 characters");
    if (userLength >= 8 && userLength <= 128) {
        passLength = userLength;
    }
    else {
        alert("Please enter a value between 8-128");
        lengthPrompt();
    }
}

function charsPrompt() {
    //uppers
    if (confirm("Include uppercase letters?")) {
        charIncluded.incUpper = true;
        alert("Uppercase included!");
    } else {
        alert("No uppercase!");
    }

    //lowers
    if (confirm("Include lowercase letters?")) {
        charIncluded.incLower = true;
        alert("Lowercase included!");
    } else {
        alert("No lowercase!");
    }

    //nums
    if (confirm("Include numbers?")) {
        charIncluded.incNums = true;
        alert("Numbers included!");
    } else {
        alert("No numbers!");
    }

    //chars
    if (confirm("Include special characters?")) {
        charIncluded.incChars = true;
        alert("Special characters included!");
    } else {
        alert("No special characters!");
    }

    //select at least one type
    if (charIncluded.incUpper === false &&
        charIncluded.incLower === false &&
        charIncluded.incNums  === false &&
        charIncluded.incChars === false) {
            alert("Please select at least one character type to include");
            charsPrompt();
        }
}

function createCharList() {
    if (charIncluded.incUpper) {
        fullCharList = fullCharList.concat(listUpper);
    } 
    if (charIncluded.incLower) {
        fullCharList = fullCharList.concat(listLower);
    } 
    if (charIncluded.incNums) {
        fullCharList = fullCharList.concat(listNums);
    } 
    if (charIncluded.incChars) {
        fullCharList = fullCharList.concat(listChars);
    } 
}

// Add event listener to generate button (provided)
generateBtn.addEventListener("click", writePassword);


/*
length
chartypes
*/

/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/