"use strict";
let button = document.getElementById("button");
let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
function addNumber(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => (console.log(addNumber(Number(numberOne === null || numberOne === void 0 ? void 0 : numberOne.value), Number(numberTwo === null || numberTwo === void 0 ? void 0 : numberTwo.value)))));
