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


/**
 The function returns the last date of the accepted month certain year.
 */


function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1);
    date.setDate(0);

    return date.getDate();
}

// console.log(getLastDayOfMonth(2012, 0));
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2013, 1));


/**
 The function that returns a number of seconds which have gone from start of the day. 
 */


function getSecondsToday() {
    var now = new Date(),
        day = now.getDate(),
        month = now.getMonth(),
        year = now.getFullYear(),
        startDayDate = new Date(year, month, day);

        return Math.floor((now - startDayDate) / 1000);
}

// console.log(getSecondsToday());


/**
 The function returns the number of seconds remains up to the tomorrow.
 */


function getSecondsToTomorrow() {
    var now = new Date(),
        tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.floor((tomorrow - now) / 1000);
}

// console.log(getSecondsToTomorrow());


/**
 The function formats the accepted date to the dd.mm.hh format.
 */


function formatData(date) {
    var year = String(date.getFullYear()),
        month = String(date.getMonth() + 1),
        day = String(date.getDate());

    year = year.slice(-2);
    month = (month.length < 2) ? '0' + month : month;
    day = (day.length < 2) ? '0' + day : day;

    return `${day}.${month}.${year}`;
}


// var date = new Date(2001, 1, 01);
// console.log(formatData(date));
// var date = new Date(2014, 0, 30);
// console.log(formatData(date));
// var options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric'
// };
// console.log(date.toLocaleString("uk", options));


/**
 The function returns the certain answer which depends on the accepted date age.
 */


function formatPastDate(date) {
    var now = new Date(),
        datesDifference = now - date,
        secondsBefore = Math.floor(datesDifference / 1000),
        minutesBefore = Math.floor(datesDifference / 60000),
        formatedDate = '';

    if (datesDifference < 1000) {
        formatedDate = 'right now';
    } else if (datesDifference < 60000) {
        formatedDate = secondsBefore + ' seconds before';
    } else if (datesDifference < 60000000) {
        formatedDate = minutesBefore + ' minutes before';
    } else {
        formatedDate = date.toDateString();
    }

    return formatedDate;
}


// console.log(formatPastDate(new Date(new Date() - 1)));
// console.log(formatPastDate(new Date(new Date() - 30 * 1000)));
// console.log(formatPastDate(new Date(new Date() - 5 * 60 * 1000)));
// console.log(formatPastDate(new Date(new Date() - 86400 * 1000)));
