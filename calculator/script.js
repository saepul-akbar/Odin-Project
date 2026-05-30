let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '0';
let isResetDisplay = false;

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".btn.clear")
    let equal = document.querySelector(".btn.equal")
    let decimal = document.querySelector(".btn.decimal")

    let number = document.querySelectorAll(".btn.number")
    let operator = document.querySelectorAll(".btn.operator")

    let previousScreen = document.querySelector(".previous")
    let currentScreen = document.querySelector(".current")

    number.forEach(button => {
        button.addEventListener("click", () => {
            if (displayValue === '0' || isResetDisplay) {
                displayValue = button.textContent;
                isResetDisplay = false;
            } else {
                displayValue += button.textContent;
            }
            currentScreen.textContent = displayValue;
        });
    });


operator.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber !== '' && operator !== '' && !isResetDisplay) {
            displayValue = operate(operator, firstNumber, displayValue).toString();
        }
        firstNumber = displayValue;
        operator = button.textContent;
        // Update layar: Angka pertama + operator di atas
        previousScreen.textContent = `${firstNumber} ${operator}`;
        isResetDisplay = true;
    });
});

equal.addEventListener("click", () => {
    if (firstNumber !== '' && operator !== '') {
        let secondNumber = displayValue;
        let result = operate(operator, firstNumber, displayValue);
        
        // Update layar: Persamaan lengkap di atas, hasil di bawah
        previousScreen.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
        displayValue = result.toString();
        currentScreen.textContent = displayValue;
        
        firstNumber = '';
        operator = '';
        isResetDisplay = true;
    }
});

clear.addEventListener("click", () => {
    firstNumber = '';
    operator = '';
    displayValue = '0';
    isResetDisplay = false;
    currentScreen.textContent = '0';
    previousScreen.textContent = ''; // Bersihkan layar atas
});

decimal.addEventListener("click", () => {
    // Jika sedang reset layar (setelah operator), mulai dengan '0.'
    if (isResetDisplay) {
        displayValue = '0.';
        isResetDisplay = false;
    } 
    // Hanya tambahkan titik jika displayValue belum memilikinya
    else if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    currentScreen.textContent = displayValue;
});
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Nice Try!";
    }
    return a / b;
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    let result;

    switch(operator) {
        case '+': result = add(a, b); break;
        case '-': result = subtract(a, b); break;
        case 'x': result = multiply(a, b); break; // Pastikan 'x' sesuai tombol HTML
        case '/': result = divide(a, b); break;
        default: return null;
    }

    // Jika hasil adalah angka (bukan pesan error pembagian nol)
    if (typeof result === 'number') {
        // Bulatkan ke maksimal 5 angka di belakang desimal [1, 2]
        return Math.round(result * 100000) / 100000;
    }
    return result;
}