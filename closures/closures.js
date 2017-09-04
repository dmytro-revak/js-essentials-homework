var numbers = [1, 2, 3, 4, 5];

transformedNumbers = numbers.map(function(elem) {
    return function(){
        return(elem);
    };
});

// for (var i = 0; i < transformedNumbers.length; i++) {
//     console.log(transformedNumbers[i]());
// }





objectstArray = [
    {a : 'a', b : 'b'},
    {a : 'a'},
    {a : 'a', b : 'b', c : 'c'}
];

function sortObjectByPropAmount(firsElem, secondElem) {
    return Object.keys(firsElem).length - Object.keys(secondElem).length;
}

objectstArray.sort(sortObjectByPropAmount);

// console.log(objectstArray);



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







Number.prototype.plus = function(n) {
    return this + n;
};
Number.prototype.minus = function(n) {
    return this - n;
};

// console.log((5).plus(2).minus(4));



function addNumbers(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// console.log(addNumbers(5)(5));




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

users.sort(sortByField('name'));
users.forEach(function(user) {
    console.log(user.name);
});

users.sort(sortByField('age'));
users.forEach(function(user) {
    console.log(user.name);
});