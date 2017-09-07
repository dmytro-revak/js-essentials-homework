/**
 Transform array of numbers to array of functions that will alert that digits.
 */


var numbers = [1, 2, 3, 4, 5];

transformedNumbers = numbers.map(function(elem) {
    return function(){
        return(elem);
    };
});

// for (var i = 0; i < transformedNumbers.length; i++) {
//     console.log(transformedNumbers[i]());
// }


/**
 Sort array of objects by number of object properties.
 */


objectsArray = [
    {a : 'a', b : 'b'},
    {a : 'a'},
    {a : 'a', b : 'b', c : 'c'}
];

function sortObjectByPropAmount(firsElem, secondElem) {
    return Object.keys(firsElem).length - Object.keys(secondElem).length;
}

objectsArray.sort(sortObjectByPropAmount);
// console.log(objectsArray);


/**
 The function returns the Fibonacci numbers using closures.
 */


function fibonacciCounter() {
    var firstConjunction = 0,
        secondConjunction = 1;

    return function() {
        var currentSum = firstConjunction + secondConjunction;
        firstConjunction = secondConjunction;
        secondConjunction = currentSum;

        return currentSum;
    };

}

var fib = fibonacciCounter();

// for (var i = 0; i < 10; i++) {
//     console.log(fib());
// }


/**
 Make this syntax possible: var a = (5).plus(3).minus(6);
 */


Number.prototype.plus = function(n) {
    return this + n;
};
Number.prototype.minus = function(n) {
    return this - n;
};

// console.log((5).plus(2).minus(4));


/**
 The function adds two numbers using closures.
 */


function addNumbers(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// console.log(addNumbers(5)(5));


/**
 Implementation of a stringbuffer using closure.
 */


function stringBuffer() {
    var storage = '';

    function buffer(elem) {

        if (arguments.length) {
            storage += elem;
        } else {
            console.log(storage);
        }
    }

    buffer.clear = function() {
        storage = '';
    };

    return buffer;
}

var buffer = stringBuffer();

// buffer('some value');
// buffer(5);
// buffer(['a', 'r', 'r', 'a', 'y']);
// buffer();
// buffer.clear();
// buffer();


/**
 The function sorts an objects array with some field. 
 */


function sortByField(field) {
    return function(firstElem, secondElem) {
        return (firstElem[field] > secondElem[field]) ? 1 : -1;
    };
}

var users = [
    {
        name: 'Tom',
        surname: 'Ivanov',
        age: 20
    }, {
        name: 'Peter',
        surname: 'Doe',
        age: 25
    }, {
        name: 'Eric',
        surname: 'Moreno',
        age: 18
    }
];

// users.sort(sortByField('name'));
// users.forEach(function(user) {
//     console.log(user.name);
// });

// users.sort(sortByField('age'));
// users.forEach(function(user) {
//     console.log(user.name);
// });


/**
 Custom filter function which uses functions with closures.
 */


function inBetween(smallestNumber, largestNumber) {
    return function(element) {
        return (element >= smallestNumber && element <= largestNumber);
    };
}

function inArray(acceptedArray) {
    return function(element) {
        return acceptedArray.indexOf(element) !== -1;
    };
}

function filter(acceptedArray, callback) {
    var filteredArray = [];

    acceptedArray.forEach(function(element) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    });

    return filteredArray;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(filter(arr, function(a) {
    // return a % 2 == 0;
// }));
// console.log(filter(arr, inBetween(3, 6)));
// console.log(filter(arr, inArray([1, 2, 10])));


/**
 Create the army of functions where each of them returns its own number.
 */


function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = (function(numberOfShooter) {
            return function() {
                console.log(numberOfShooter);
            };
        })(i);
        shooters.push(shooter);
      }

      return shooters;
    }

// var army = makeArmy();
// army[0]();
// army[3]();
// army[5]();
