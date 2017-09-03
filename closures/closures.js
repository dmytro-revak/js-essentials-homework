var numbers = [1, 2, 3, 4, 5];

transformedNumbers = numbers.map(function(elem) {
    return function(){
        return(elem);
    };
});

for (var i = 0; i < transformedNumbers.length; i++) {
    console.log(transformedNumbers[i]());
}