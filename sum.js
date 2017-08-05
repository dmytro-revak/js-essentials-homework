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

// sumToNumbers();
alert( getDecimal(12.345) );
alert( getDecimal(1.2) );
alert( getDecimal(-1.2) );
