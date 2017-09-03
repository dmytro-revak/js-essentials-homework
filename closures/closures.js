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

for (var i = 0; i < 10; i++) {
    console.log(fib());
}