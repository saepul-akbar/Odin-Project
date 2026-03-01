function add7(number) {
    return number + 7;
}

console.log(add7(10));

function multiply(num1,num2) {
    return num1 * num2
}

console.log(multiply(3,2));

function capitalize(text) {
    return text.charAt(0).toUpperCase(0) + text.slice(1).toLowerCase();
}

console.log(capitalize("abcd")); 
console.log(capitalize("ABCD")); 
console.log(capitalize("aBcD"));

function lastLatter(text) {
    return text.slice(-1);
}

console.log(lastLatter("abcd"));