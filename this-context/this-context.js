/**
 Calculator object using this context.
 */


var calculator = {
    read: function() {
        this.firstNumber = parseInt(prompt('Enter the first number: '));
        this.secondNumber = parseInt(prompt('Enter the second number: '));
    },
    sum: function() {
        return this.firstNumber + this.secondNumber;
    },
    mul: function() {
        return this.firstNumber * this.secondNumber;
    }
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());


/**
 Custom chaining with using this context.
 */


var ladder = {
    step: 0,

    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log(this.step);
        return this;
    }
};

// ladder.up().up().down().up().down().showStep();


/**
 Make possible the next syntax "sum(1)(2)(1)(3)(2)".
 */


function sum(argument) {
    var currentSum = argument;

    function add(number) {
        currentSum += number;
        return add;
    }

    add.toString = function() {
        return currentSum;
    };

    return add;
}

console.log(sum(1)(2)(1)(5));
console.log(sum(4)(2)(1)(5)(8));