function isEmpty(object) {
    return !Boolean(Object.keys(object).length);
}

var schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "Wake up";
console.log(isEmpty(schedule));
