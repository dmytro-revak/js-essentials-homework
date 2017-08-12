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
 The function simulates arrays' indexOf function.
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

// var testArray = ['test', 2, 1.5, false];
// console.log(findIndex(testArray, 'test'));
// console.log(findIndex(testArray, 2));
// console.log(findIndex(testArray, 1.5));
// console.log(findIndex(testArray, 0));


/**
 The function returns the numbers array where all numbers are in certain range.
 */


function filterRange(array, a, b) {
    var filteredArray = [];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        if (element >= a && element <= b) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

// var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterRange(numbersArray, 2, 8));
// console.log(filterRange(numbersArray, 5, 6));
// console.log(filterRange(numbersArray, 5, 5));


/**
 The function returns the sum of all prime numbers in certain
 range using the sieve of Eratosthenes algorithm.
 */


function getSumOfPrimeNumbers(amountOfNumbers) {
    var numbersSequence = getCertainNumbersSequence(amountOfNumbers),
        primeNumbersSequence = getPrimeNumbersSequence(numbersSequence),
        primeNumbersSum = getSequenceSum(primeNumbersSequence, 2);

    return primeNumbersSum;

    function getSequenceSum(numbersSequence, startNumber) {
        var sum = 0;

        for (var i = startNumber; i < numbersSequence.length; i++) {
            if (numbersSequence[i]) sum += i;
        }

        return sum;
    }

    function getPrimeNumbersSequence(numbersSequence) {
        for (var i = 2; i < numbersSequence.length; i++) {
            if (i * i > numbersSequence.length) {
                break;
            } else if (numbersSequence[i]) {
                removeMultipleOfCertainNumber(i, numbersSequence);
            }
        }

        return numbersSequence;
    }

    function removeMultipleOfCertainNumber(number, numbersSequence) {
        for (var i = number * number; i < numbersSequence.length; i += number) {
            numbersSequence[i] = false;
        }
    }

    function getCertainNumbersSequence(amountOfNumbers) {
        var numbersSequence = [];

        for (var i = 2; i < amountOfNumbers + 1; i++) {
            numbersSequence[i] = true;
        }

        return numbersSequence;
    }
}

// console.log(getSumOfPrimeNumbers(100));


/**
 The function returns the max sum of numbers from the certain sub array.
 */


function getMaxSubSum(numbersArray) {
    var currentSum = 0,
        maxSum = 0;

    for (var i = 0; i < numbersArray.length; i++) {
        var number = numbersArray[i];
        currentSum = (currentSum + number < 0) ? 0 : currentSum + number;
        maxSum = (currentSum > maxSum) ? currentSum : maxSum;
    }

    return maxSum;
}

// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));
// console.log(getMaxSubSum([-1, -2, -3]));


/**
 The function adds unique class names to the classesNames property of accepted array.
 */


function addClass(object, className) {
    var classesNames = (object.classesNames) ? object.classesNames.split(' ') : [];
    
    if (classesNames.indexOf(className) == -1) {
        classesNames.push(className);
    }

    object.classesNames = classesNames.join(' ');
}

var classesObject = {
    classesNames: 'new'
};

// addClass(classesObject, 'new');
// console.log(classesObject.classesNames);
// addClass(classesObject, 'open');
// console.log(classesObject.classesNames);
// addClass(classesObject, 'me');
// console.log(classesObject.classesNames);
// addClass(classesObject, 'me');
// console.log(classesObject);


/**
 The function converts hyphen-string to camelCase string.
 */


function cameCaseConvert(hyphenString) {
    var stringWords = hyphenString.split('-');

    for (var i = 1; i < stringWords.length; i++) {
        var word = stringWords[i],
            wordBody = word.slice(1),
            firstChar = word.charAt(0).toUpperCase(),
            modifiedWord = firstChar + wordBody;
        
        stringWords[i] = modifiedWord;
    }

    return stringWords.join('');
}

// console.log(cameCaseConvert('background-color'));
// console.log(cameCaseConvert('list-style-image'));
// console.log(cameCaseConvert('-webkit-transition'));


/**
 The function removes accepted class name in the certain object's field of classes names.
 */


function removeClass(object, className) {
    var classesNames = (object.classesNames) ? object.classesNames.split(' ') : [];
    for (var i = 0; i < classesNames.length; i++) {
        var currentClassName = classesNames[i];

        if (currentClassName === className) {
            classesNames.splice(i, 1);
            i--;
        }
    }

    object.classesNames = classesNames.join(' ');
}

var classesObject = {
    classesNames: 'open class menu some menu menu'
};

// removeClass(classesObject, 'open');
// removeClass(classesObject, 'blabla');
// removeClass(classesObject, 'menu');
// console.log(classesObject);
// removeClass(classesObject, 'menu');
// console.log(classesObject);



function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        var number = arr[i];

        if (number < a || number > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

numbersArray = [5, 3, 8, 1, 2, 7, 5, 9, 0];
filterRangeInPlace(numbersArray, 1, 4);
console.log(numbersArray);
