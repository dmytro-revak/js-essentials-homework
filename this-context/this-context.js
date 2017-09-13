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
 Rewrite calculator using function-constructor.
 */


function Calculator() {
    this.read = function() {
        this.firstNumber = parseInt(prompt('Enter the first number: '));
        this.secondNumber = parseInt(prompt('Enter the second number: '));
    };
    this.sum = function() {
        return this.firstNumber + this.secondNumber;
    };
    this.mul = function() {
        return this.firstNumber * this.secondNumber;
    };
}

// var calculator = new Calculator();
// calculator.read();
// console.log('Sum: ' + calculator.sum());
// console.log('Mul: ' + calculator.mul());


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

// console.log(sum(1)(2)(1)(5));
// console.log(sum(4)(2)(1)(5)(8));


/**
 The accumulator that saves all user entered values.
 */


function NumbersAccumulator(startValue) {
    this.value = startValue;

    this.read = function() {
        this.value += parseInt(prompt('Enter the number: ', 0));
    };

}

// var numbersAccumulator = new NumbersAccumulator(0);
// numbersAccumulator.read();
// numbersAccumulator.read();
// console.log(numbersAccumulator.value);


// function Calculator() {

//     var operators = {
//         '+': function(a, b) {
//             return a + b;
//         },
//         '-': function(a, b) {
//             return a - b;
//         }
//     };

//     this.calculate = function(mathExp) {
//         debugger
//         var expression = parseExpression(mathExp),
//             currentSum = null;

//         for (var i = 0; i < expression.length; i += 2) {

//             // if (!parseInt(expression[i])) continue;

//             var firstNumber = currentSum || parseInt(expression[i]),
//                 secondNumber = parseInt(expression[i + 2]),
//                 operator = operators[expression[i + 1]];

//             currentSum = operator(firstNumber, secondNumber);
//         }

//         return currentSum;
//     };

//     function parseExpression(expression) {
//         return expression.split(' ');
//     }
// }

// var calc = new Calculator();
// console.log(calc.calculate('3 + 7'));
// console.log(calc.calculate('3 + 7 + 15 - 2'));
// console.log(calc.calculate('2 + 1 - 2'));




/**
 Create User constructor function with the get/set descriptors.
 */


function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, 'firstName', {
        get: function() {
            return this.fullName.split(' ')[0];
        },
        set: function(newFirstName) {
            this.fullName = newFirstName + ' ' + this.lastName;
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function() {
            return this.fullName.split(' ')[1];
        },
        set: function(newLastName) {
            this.fullName = this.firstName + ' ' + newLastName;
        }
    });
}

// var john = new User('John Doe');
// console.log(john.firstName);
// console.log(john.lastName);
// john.firstName = 'Mark';
// john.lastName = 'Moreno';
// console.log(john.fullName);


/**
 Create Article constructor with static properties and methods.
 */


function Article() {
    this.created = new Date();
    Article.articlesAmount++;
    Article.lastArticleDate = this.created;
}

Article.articlesAmount = 0;
Article.lastArticleDate = null;

Article.showStatus = function() {
    console.log(this.articlesAmount, this.lastArticleDate);
};

// new Article();
// new Article();
// Article.showStatus();
// new Article();
// Article.showStatus();


/**
 The function which returns the sum of arbitrary accepted arguments using 'call' method.
 */


function sumArgs() {
    return [].reduce.call(arguments, function(sum, currentValue) {
        return sum + currentValue;
    });
}

console.log(sumArgs(1, 2, 3));
console.log(sumArgs(1, 2, 3, 2, 1));

