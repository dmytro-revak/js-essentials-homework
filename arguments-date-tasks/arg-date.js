/**
 The function verifies has user entered the first argument.
 */


function checkFirstArgument() {
    var isArgument = Boolean(arguments.length),
        result = (isArgument) ? 'There is first argument' : 'There is not first argument';

    return result;
}

// console.log(checkFirstArgument());
// console.log(checkFirstArgument(1));


function allArgumentsSum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(allArgumentsSum());
console.log(allArgumentsSum(1));
console.log(allArgumentsSum(1, 2));
console.log(allArgumentsSum(1, 2, 3));
console.log(allArgumentsSum(1, 2, 3, 4));