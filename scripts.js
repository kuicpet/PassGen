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
function generatepassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => 
        Object.values(item)[0]);
    
        if(typesCount === 0) {
            return "";
        }

        for (let i = 0; i < length; i+=typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                generatedPassword += randomFunc[funcName]();
            });
        }

        const finalPassword = generatedPassword.slice(0, length);
        return finalPassword;
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