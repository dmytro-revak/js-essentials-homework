(function implementTheGuessGame() {
  var numberOfGame = 1;
  var sizeOfPrize = 1;
  var finalPrize = 0;
  var sizeOfGap = 5;
  askYouWantToPlay();

  function askYouWantToPlay() {
    var doYouWantToPlay = confirm('Do you want to play the game?');
    if (doYouWantToPlay) {
      playTheGame(numberOfGame, sizeOfPrize);
    } else {
      console.log('Today you will not win the jackpot, but you could');
    }
    return doYouWantToPlay;
  }

  function playTheGame(numberOfGame, sizeOfPrize) {
    var gap = sizeOfGap + 1;
    var ramdomNumber = Math.floor((Math.random() * gap));
    var haveYouGuessedNumber = false;
    for (var i = 1; i < 4; i++) {
      var usersNumber = parseInt(prompt('This is your ' + i + ' attempt. Please. enter your number from 0 to ' + sizeOfGap));
      if (usersNumber === ramdomNumber && i === 1) {
        console.log('Your win - ' + 10 * sizeOfPrize + ' $');
        finalPrize += 10 * sizeOfPrize;
        haveYouGuessedNumber = true;
        break;
      } else if (usersNumber === ramdomNumber && i === 2) {
        console.log('Your win - ' + 5 * sizeOfPrize + ' $');
        finalPrize += 5 * sizeOfPrize;
        haveYouGuessedNumber = true;
        break;
      } else if (usersNumber === ramdomNumber && i === 3) {
        console.log('Your win - ' + 2 * sizeOfPrize + ' $');
        finalPrize += 2 * sizeOfPrize;
        haveYouGuessedNumber = true;
        break;
      } else if (usersNumber !== ramdomNumber && i === 3) {
        console.log('Your win - 0$');
      }
    }

    continueTheGame();

    function continueTheGame() {
      var doYuoWantToPlayAgain = confirm('Do you want to play the game one more time ?');
      if (doYuoWantToPlayAgain === true && haveYouGuessedNumber === true) {
        sizeOfPrize = Math.pow(3,numberOfGame);
        numberOfGame++;
        sizeOfGap *= 2;
        playTheGame(numberOfGame, sizeOfPrize);
      } else if (doYuoWantToPlayAgain === true && haveYouGuessedNumber === false) {
        playTheGame(numberOfGame, sizeOfPrize);
      } else {
        console.log('Thanks for the game! Your win is ' + finalPrize + ' $');
      }
    }
  }  
})();
