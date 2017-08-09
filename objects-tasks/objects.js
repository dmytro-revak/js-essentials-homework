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
    "Julia": 250
};
console.log(countSalaries(salaries));
