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
        var currentEmployeeSalary = salariesObject[employee];

        if (currentEmployeeSalary > highestSalary) {
            highestPaidEmployee = employee;
            highestSalary = currentEmployeeSalary;
        }
    }

    return highestPaidEmployee || 'There are not employees';
}

// console.log(getHighestPaidEmployee(salaries));


/**
The function multiplies all numeric properties in the accepted object.
 */


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
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
// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);


/**
The function provides deeply recursive copying of accepted object.
 */


function recursiveObjectCopy(object) {
    var objectCopy = (Array.isArray(object)) ? [] : {};

    for (var key in object) {
        copyObjectProperty(objectCopy, object, key);
    }

    return objectCopy;

    function copyObjectProperty(objectCopy, originalObject, objectProperty) {
        if (originalObject[objectProperty] instanceof Object ||
            originalObject[objectProperty] instanceof Array) {
            objectCopy[objectProperty] = recursiveObjectCopy(originalObject[objectProperty]);
        } else {
            objectCopy[objectProperty] = originalObject[objectProperty];
        }
    }
}

var testObject = {
    prop: 'prop',
    prop2: 'prop2',
    num: 1,
    arr: ['some', 'arr'],
    num2: 2,
    obj: {
        some: 'object'
    },
    arr2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    obj2: {
        test: {
            prop: 'nested ong',
            nestedArr: ['nested', 'arr']
        },
        test2: 'test2',
        test3: 'test3'
    }
};
console.log(testObject);
console.log(recursiveObjectCopy(testObject));
