let firstValue = '';
let currentOperator = '';
let isResetDisplay = false; 

const display = document.getElementById('display');

function appendNumber(number) {
    // Membandingkan dengan string '0' bukan number 0
    if (display.value === '0' || isResetDisplay) {
        display.value = number;
        isResetDisplay = false;
    } else {
        display.value += number;
    }
}

function setOperator(operator) {
    // Ambil angka pertama dari layar saat ini
    firstValue = display.value;
    currentOperator = operator;
    
    // NYALAKAN reset display agar saat user mengetik angka kedua, 
    // layar dibersihkan dari angka pertama
    isResetDisplay = true; 
}

function calculate() {
    // Jika operator atau angka pertama belum ada, jangan jalankan kalkulasi
    if (!currentOperator || firstValue === '') return;

    const val1 = parseFloat(firstValue);
    const val2 = parseFloat(display.value);

    const result = operate(currentOperator, val1, val2);

    // Menampilkan hasil dan membulatkan desimal panjang agar tidak overflow
    display.value = Math.round(result * 100000) / 100000; 
    
    // Siapkan data untuk kalkulasi berikutnya
    firstValue = display.value;
    currentOperator = '';
    isResetDisplay = true;
}

// Sesuaikan nama fungsi ini dengan onclick="clearResult()" di HTML-mu
function clearResult() {
    display.value = '0'; // Kembali ke string '0'
    firstValue = '';
    currentOperator = '';
    isResetDisplay = false;
}

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
        return "Lol No. Error!"; // Pesan error snarky sesuai instruksi Odin!
    }    
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}