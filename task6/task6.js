// (function playTheGame () {
// 	var random = Math.floor((Math.random() * 100));
// 	function guessTheNumber(){
// 		var guess  = (parseInt(prompt('Please try to guess the number with 0 to 100'), 10));
// 		if (guess === random) {
// 			alert('You are right, the number is ' + (random));
// 		} else if (guess < random) {
// 			alert('Our number is lower, try again');
// 			guessTheNumber();
// 		} else if (guess > random) {
// 			alert('Our number is higher, try again');
// 			guessTheNumber();
// 		} else {

// 		}
// 	}
// 	guessTheNumber();
// })()


(function playTheGame () {
	var random = Math.floor((Math.random() * 100));
	function guessTheNumber(){
		var guess  = (prompt('Please try to guess the number with 0 to 100'));
		if (typeof(guess) == 'string') {
			var guess = parseInt(guess);
			if (isNaN(guess) == false){
				if (guess === random) {
						alert('You are right, the number is ' + (random));
					} else if (guess < random) {
						alert('Our number is lower, try again');
						guessTheNumber();
					} else {
						alert('Our number is higher, try again');
						guessTheNumber();
					}

			} else {
				alert('You have entered incorect value. Please try again');
				// console.log('You have entered incorect value. Please try again');
				guessTheNumber();
			}

		} else {
			alert('Good bye');
		}
	}
	guessTheNumber();
})()


// if (typeof(guess) == 'string') {
// var  guess = parseInt(guess);
// console.log(guess);
// } else if (guess == null) {
// 	console.log('null');
// } else {
// 	// var  guess = parseInt(guess);
// 	// console.log(guess);
// }



// if (guess === NaN) {
// console.log(guess);
// } else {
// 	console.log(2);
// }