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
