(function playTheGame () {
	var random = Math.floor((Math.random() * 100));
	function guessTheNumber(){
		var guess = (prompt('Please try to guess the number with 0 to 100'));
		if (typeof(guess) == 'string') {
			var guess = parseInt(guess);
			if (isNaN(guess) == false) {
				if (guess === random) {
					alert('You are right, the number is ' + (random));
				} else if (guess < random) {
					alert('Our number is higher, try again');
					guessTheNumber();
				} else {
					alert('Our number is lower, try again');
					guessTheNumber();
				}
			} else {
				alert('You have entered incorect value. Please try again');
				guessTheNumber();
			}
		} else {
			alert('Good bye');
		}
	}
	guessTheNumber();
})()