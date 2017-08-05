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

// sumToNumbers();
// console.log( getDecimal(12.345) );
// console.log( getDecimal(1.2) );
// console.log( getDecimal(-1.2) );
// console.log( fibBinet(3) );
// console.log( fibBinet(77) );