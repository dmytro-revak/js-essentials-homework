(function implementTheGuessGame() {
  var numberOfGame = 1;
  var sizeOfPrize = 1;
  var finalPrize = 0;
  askYouWantToPlay();

  function askYouWantToPlay() {
    doYouWantToPlay = confirm('Do you want to play the game?');
    if (doYouWantToPlay) {
      playTheGame(numberOfGame, sizeOfPrize);
    } else {
      console.log('Today you will not win the jackpot, but you could');
    }
    return doYouWantToPlay;
  }

  function playTheGame(numberOfGame, sizeOfPrize) {
    var gap = numberOfGame * 5 + 1;
    var ramdomNumber = Math.floor((Math.random() * gap));
    var haveYouguessedNumber = false;
    for (var i = 1; i < 4; i++) {
      var usersNumber = parseInt(prompt('This is your ' + i + ' attempt. Please. enter your number'));
      if (usersNumber === ramdomNumber && i === 1) {
        console.log('Your win - 10 $');
        finalPrize += 10 * sizeOfPrize;
        haveYouguessedNumber = true;
        break;
      } else if (usersNumber === ramdomNumber && i === 2) {
        console.log('Your win - 5 $');
        finalPrize += 5 * sizeOfPrize;
        haveYouguessedNumber = true;
        break;
      } else if (usersNumber === ramdomNumber && i === 3) {
        console.log('Your win - 2 $');
        finalPrize += 2 * sizeOfPrize;
        haveYouguessedNumber = true;
        break;
      } else if (usersNumber !== ramdomNumber && i === 3) {
        console.log('Your win - 0$');
      }
    }

debugger;
    continueTheGame();

    function continueTheGame() {
      var doYuoWantToPlayAgain = confirm('Do you want to play the game one more time ?');
      if (doYuoWantToPlayAgain == true && haveYouguessedNumber == true) {
        numberOfGame++;
        sizeOfPrize = Math.pow(3,numberOfGame);
        playTheGame(numberOfGame, sizeOfPrize);
      } else if (doYuoWantToPlayAgain == true && haveYouguessedNumber == false) {
        playTheGame(numberOfGame, sizeOfPrize);
      } else {
        console.log('Thanks for the game! Your win is ' + finalPrize + ' $');
      }
    }
  }  
})()


