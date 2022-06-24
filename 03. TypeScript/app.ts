let button = document.getElementById("button");
let numberOne = document.getElementById("numberOne") as HTMLInputElement;
let numberTwo = document.getElementById("numberTwo") as HTMLInputElement;


function addNumber(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo;
}

button?.addEventListener('click', () => (
    console.log(addNumber(Number(numberOne?.value), Number(numberTwo?.value)))
))