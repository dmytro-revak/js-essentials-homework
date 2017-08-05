function sumToNumbers() {
    var firstNumber = parseFloat(prompt('Enter the first number: ')),
        secondNumber = parseFloat(prompt('Enter the second number: '));

    alert(firstNumber + secondNumber);
}

function getDecimal(num) {
    var dotPosition = String(num).indexOf('.'),
        decimalNumbersAmount = (String(num).length - 1) - dotPosition,
        numberWithDecimal = Math.abs(parseFloat(num));
    return (numberWithDecimal % 1).toFixed(decimalNumbersAmount);
}

function fibBinet(fibNumber) {
    var f = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(f, fibNumber) / Math.sqrt(5));
}

function randomNumberFromZeroToMax(max) {
    return Math.floor(Math.random() * max);
}

function randomNumberFromMinToMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomNumberFromMinWithMax(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

// sumToNumbers();
// console.log( getDecimal(12.345) );
// console.log( getDecimal(1.2) );
// console.log( getDecimal(-1.2) );
// console.log( fibBinet(3) );
// console.log( fibBinet(77) );
// console.log(randomNumberFromZeroToMax(5));
// console.log(randomNumberFromMinToMax(4, 10));
// console.log(randomNumberFromMinWithMax(1, 3));
