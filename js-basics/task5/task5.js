function a() {
	return 5;
}

function b(firstTerm, secondTerm) {
	return firstTerm + secondTerm;
}

function c(base, exponent) {
	if (exponent <= 0) {
		return 0;
	} else {	
		var number = 1;
		for (var i = 1; i <= exponent; i++) {
			number *= base;
		}
		return number;
	}	
}

function d(number) {
	var dFunctionObject = {
		a:number
	}
	return dFunctionObject;
}

function e(number) {
	var firsFuncNumber = number;
	return function eSecond() {
		return firsFuncNumber;
	}
}

function f(arrSymbl, count) {
	var arr = [];
	for (var i = 0; i < count; i++) {
		arr.push(arrSymbl);
	}
	return arr;
}

function g(number) {
	if (number === undefined) {
		return 99;
	} else {
		return number;
	}
}

function h(enteredFunction) {
	return enteredFunction();
}

function j(arr = []) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

function k (obj = {}) {
	var result = 0;
	for ( var key in obj) {
		result += obj[key];
	}
	return result;
}

function m (firsArr = [], secondArr = []) {
	if (firsArr.length === secondArr.length) {
		var resultArr = [];
		for (var i = 0; i < firsArr.length; i++) {
			resultArr[i] = firsArr[i] + secondArr[i];
		}
	} else {
		console.log('Please enter same length arrays');
	}
	return resultArr;
}

function n (firstNumber) {
	return function n1 (secondNumber) {
		return function n2 (thirdNumber) {
			return firstNumber + secondNumber + thirdNumber;
		}
	}
}