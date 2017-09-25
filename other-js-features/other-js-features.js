/**
 Practice with the polymorphic function that accepts difference type
 of arguments and returns date in a certain format.
 */


function formatDate(date) {

    var formatedDate = null;

    if (typeof(date) === 'number') {
        formatedDate = new Date(date * 1000);

    } else if ( typeof(date) === 'string') {
        formatedDate = new Date(date);

    } else if (Array.isArray(date)) {
        date.unshift(null);
        formatedDate = new (Function.prototype.bind.apply(Date, date));

    } else {
        formatedDate = date;
    }

    var getDay = formatOneDigitDate(formatedDate, formatedDate.getDate),
        getMonth = formatOneDigitDate(formatedDate, formatedDate.getMonth, true),
        getYear = formatOneDigitDate(formatedDate, formatedDate.getFullYear);

        return getDay() + '.' + getMonth() + '.' + getYear();
}


/**
 Decorator that verifies does date element have two digits.
 */


function formatOneDigitDate(date, getDateElementFunction, isMonth) {

    return function() {

        var dateElement = isMonth ? getDateElementFunction.call(date) + 1 : getDateElementFunction.call(date);
        dateElement = String(dateElement);

        if (dateElement.length === 1) {
            dateElement = '0' + dateElement;
        }

        return dateElement;
    };
}

// console.log(formatDate('2011-10-02'));
// console.log(formatDate(1234567890));
// console.log(formatDate([2014, 0, 1]));
// console.log(formatDate(new Date(2014, 0, 1)));


/**
 Practice with JSON format.
 */


var leader = {
    name: 'John Doe',
    age: 35
};

var jsonLeader = JSON.stringify(leader);
// console.log(jsonLeader);
var objectLeader = JSON.parse(jsonLeader);
// console.log(objectLeader);
