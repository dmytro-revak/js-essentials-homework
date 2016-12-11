(function playTheGame() {
	var doYouconfirm = confirm('Do you want to play the game?');
	var numberOfGame = 0;
	if (doYouconfirm) {
		while (doYouconfirm) {
				var firstAttemptPrize = 10;
				var secondAttemptPrize = 5;
				var thirdttemptPrize = 2;
				var finalPrize = 0;
				var numberOfGame = 1;
				var sizeOfprize = 1;
				(function playTheGuessGame() {
					var gap = numberOfGame*5 +1;
					var ramdomNumber = Math.floor((Math.random() * gap));
					console.log(ramdomNumber);
					for (var i = 0; i < 3; i++) {
						attempts = ['first', 'second', 'third'];
						var usersNumber = parseInt(prompt('This is your ' + attempts[i] + ' attempt. Please. enter your number'));
						if (usersNumber === ramdomNumber) {
							if (i === 0) {
								console.log('Your win - ' +  firstAttemptPrize +' $');
								finalPrize += firstAttemptPrize * sizeOfprize;
								break;
							} else if (i === 1) {
								console.log('Your win - ' +  secondAttemptPrize +' $');
								finalPrize += secondAttemptPrize * sizeOfprize;
								break;
							} else {
								console.log('Your win - ' +  thirdttemptPrize +' $');
								finalPrize += thirdttemptPrize * sizeOfprize;
								break;
							}
						} else {
							if (i === 2) {
							console.log('Your win - 0$');
							var orYoulose = true;
							}
						}
					}
					debugger;
					var doYuoWantToPlayAgain = confirm('Do you want to play the game one more time ?');
					if (doYuoWantToPlayAgain) {
						if (!orYoulose) {
							sizeOfprize = Math.pow(3,numberOfGame);
							numberOfGame++;
							playTheGuessGame();
						} else {
							playTheGuessGame();
						}
					} else {
						doYouconfirm = false;
						console.log('Thanks for the game! Your win is ' + finalPrize + ' $');
					}
				})();
		}
	} else {
		console.log('Today you will not win the jackpot, but you could');
	}
})()















// пофіксити gap, встановити провірку даних, перевірити все комплексно