let firstValue = '';
let currentOperator = '';
let secondValue = '';
let isResetDisplay = false; 

const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === 0 || isResetDisplay){
        display.value = number;
        isResetDisplay = false;
    } else {
        display.value += number;
    }
}

function setOperator(operator) {
    firstValue = display.value;
    currentOperator = operator

    isResetDisplay = false;
}

function calculate() {
    const val1 = parseFloat(firstValue);
    const val2 = parseFloat(display.value);

    const result = operate(currentOperator, val1, val2);

    display.value = result;
    isResetDisplay = true;
}

function clearCalculate() {
    display.value = 0;
    firstValue = '';
    currentOperator = '';
    secondValue = '';
    isResetDisplay = false;
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        return console.log("Tidak bisa dibagi nol!")
    }    
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b) ;
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}