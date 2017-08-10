/**
 The function returns the last element of accepted array.
 */


function getLastElement(array) {
    return array[array.length - 1];
}

// var goods = ['meat', 'milk', 'apple', 'tomato'];
// console.log(getLastElement(goods));
// goods.push('potato');
// console.log(getLastElement(goods));


/**
 The function simulates the arrays push function.
 */


function arrayPush(array, element) {
    array[array.length] = element;
    return array;
}

// var users = ['tom', 'mike'];
// console.log(users);
// arrayPush(users, 'gary');
// console.log(users);


/**
 The function updates the penultimate element to accepted one.
*/


function editPenultimateElement(array, element) {
    array[array.length - 2] = element;
    return array;
}


/**
 The function simulates the arrays shift function.
 */


function arrayShift(array) {
    var firstElement = array[0];

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array.length = --array.length;

    return firstElement;
}


/**
 The function simulates the arrays indexOf function.
 */


function arrayUnshift(array, element) {
    for (var i = array.length; i >= 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = element;

    return array;
}

// var styles = ['jazz', 'blues', 'rock'];
// console.log(styles);
// editPenultimateElement(styles, 'classic');
// console.log(styles);
// arrayShift(styles);
// console.log(styles);
// arrayUnshift(styles, 'funk');
// console.log(styles);
// arrayUnshift(styles, 'punk');
// console.log(styles);


/**
 The function returns a random array element.
 */


function randomArrayElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// var countries = ['ukraine', 'russia', 'usa', 'canada', 'germany'];
// console.log(randomArrayElement(countries));


/**
 The function asks the user to enter the numbers and then returns total sum of entered numbers.
 */


function arrayCalculator() {

    var enteredArray = getNumbersArray();
    return calculateArray(enteredArray);

    function calculateArray(array) {
        var sum = 0;

        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    function getNumbersArray() {
        var askNumber = true,
            numbersArray = [];

        while (askNumber) {
            var number = prompt('Please, enter the number: ');

            if (isNumeric(number)) {
                numbersArray.push(+number);
            } else {
                askNumber = false;
            }
        }

        return numbersArray;
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}

// console.log(arrayCalculator());


/**
 The function s 
 */

function findIndex(array, value) {
    var valueIndex = -1;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            valueIndex = i;
        }
    }

    return valueIndex;
}

var testArray = ['test', 2, 1.5, false];
console.log(findIndex(testArray, 'test'));
console.log(findIndex(testArray, 2));
console.log(findIndex(testArray, 1.5));
console.log(findIndex(testArray, 0));