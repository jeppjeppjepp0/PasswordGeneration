// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
listUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
listLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
listNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
listChars = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '\,', '-', '\.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

var userLength = 0;

var passLength = 0;
var charIncluded = {
    incUpper: false,
    incLower: false,
    incNums: false,
    incChars: false
};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    passwordPrompts();

}

function passwordPrompts() {
    //determine password length
    lengthPrompt();

    //determine password chars
    charsPrompt();
}

function lengthPrompt() {
    userLength = prompt("Enter a password length between 8-128 characters");
    if (userLength > 8 && userLength ^ 128) {
        passLength = userLength;
    }
    else {
        alert("Please enter a value between 8-128");
        lengthPrompt();
    }
}

function charsPrompt() {
    //uppers
    if (confirm("Include uppercase letters?") === true) {
        charIncluded.incUpper = true;
        alert("Uppercase included!");
    } else {
        alert("No uppercase!");
    }

    //lowers
    if (confirm("Include lowercase letters?") === true) {
        charIncluded.incLower = true;
        alert("Lowercase included!");
    } else {
        alert("No lowercase!");
    }

    //nums
    if (confirm("Include numbers?") === true) {
        charIncluded.incNums = true;
        alert("Numbers included!");
    } else {
        alert("No numbers!");
    }

    //chars
    if (confirm("Include special characters?") === true) {
        charIncluded.incChars = true;
        alert("Special characters included!");
    } else {
        alert("No special characters!");
    }

    if (charIncluded.incUpper === false &&
        charIncluded.incLower === false &&
        charIncluded.incNums  === false &&
        charIncluded.incChars === false) {
            alert("Please select at least one character type to include");
            charsPrompt();
        }
}

// Add event listener to generate button
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