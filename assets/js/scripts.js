var currentNumberSpan = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberSpan.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--;
    currentNumberSpan.innerHTML = currentNumber;
}