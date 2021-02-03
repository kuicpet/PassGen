// DOM elements
const result = document.querySelector(".result");
const length = document.querySelector(".result");
const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generateBtn = document.querySelector(".generate");
const clipboard = document.querySelector("#clipboard");

// random function Objects
const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}
// Event Listeners



// Functions
// Generate a password
function generatepassword() {
    
}
// Get a random upper case letter
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Get a random upper case letter
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Get a random number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// Get a random symbol 
function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}