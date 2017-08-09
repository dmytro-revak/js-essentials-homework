/**
The function checks if the accepted object is empty.
 */


function isEmpty(object) {
    return !Boolean(Object.keys(object).length);
}

/*
var schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "Wake up";
console.log(isEmpty(schedule)); 
*/


/**
The function counts total employees salary in the certain object.
 */


function countSalaries(salariesObject) {
    var totalSalary = 0;

    for (var employee in salariesObject) {
        totalSalary += salariesObject[employee];
    }

    return totalSalary;
}

var salaries = {
    "Oleg": 100,
    "Ostap": 300,
    "Julia": 250,
    "Jake": 200,
    "Max": 350
};
// console.log(countSalaries(salaries));


/**
The function returns the name of highest paid employee.
 */

function getHighestPaidEmployee(salariesObject) {
    var highestPaidEmployee = null,
        highestSalary = 0;

    for (var employee in salariesObject) {
        currentEmployeeSalary = salariesObject[employee];

        if (currentEmployeeSalary > highestSalary) {
            highestPaidEmployee = employee;
            highestSalary = currentEmployeeSalary;
        }
    }

    return highestPaidEmployee || 'There are not employees';
}

// console.log(getHighestPaidEmployee(salaries));




function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(object) {
    for (var key in object) {
        if (isNumeric(object[key])) {
            object[key] = object[key] * 2;
        }
    }
}

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);