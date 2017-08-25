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


/**
 The function returns the sum of all accepted arguments.
 */


function allArgumentsSum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

// console.log(allArgumentsSum());
// console.log(allArgumentsSum(1));
// console.log(allArgumentsSum(1, 2));
// console.log(allArgumentsSum(1, 2, 3));
// console.log(allArgumentsSum(1, 2, 3, 4));


var localDate = new Date(2012, 1, 20, 3, 12);
// console.log(localDate);


/**
 The function returns the name of the current week day.
 */


function getWeekDay() {
    var date = new Date(),
        weekDayNumber = date.getDay(),
        weekDays = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

        return weekDays[weekDayNumber];
}

// console.log(getWeekDay());


/**
 The function returns the number of the week day in the accepted date. (EU numeration).
 */


function getLocalDay(date) {
    var weekDayNumber = date.getDay();
    weekDayNumber = (weekDayNumber === 0) ? 7 : weekDayNumber;

    return weekDayNumber;
}

// console.log(getLocalDay(new Date(2012, 0, 3)));
// console.log(getLocalDay(new Date()));


/**
 The function returns the day of date.This date is older on the amount of accepted days.
 */


function getDateAgo(date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

// var date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));


