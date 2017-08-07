/**
The function that returns an accepted string with uppercase first char
*/

/*
function makeFirstCharUppercase(string) {
    var firstUpperChar = string.charAt(0).toUpperCase(),
        userStringBody = string.slice(1);
        newString = firstUpperChar + userStringBody;
    return newString;
}

console.log(makeFirstCharUppercase('jack'));
console.log(makeFirstCharUppercase('robert'));
console.log(makeFirstCharUppercase(''));
*/


/**
The function that checks does the accepted string contain any of spam words.
*/

/*
spamWords = ['spam', 'test', 'bitch', 'xxx'];

function checkSpam(string) {
    var userString = string.toLowerCase(),
        doesSpamExists = false;

    for (var i = 0; i < spamWords.length; i++) {
        var spamWord = spamWords[i];

        if (userString.indexOf(spamWord) !== -1) {
            doesSpamExists = true;
            break;
        }        
    }

    return doesSpamExists;
}

console.log(checkSpam('Some test string'));
console.log(checkSpam('Some TeSt string'));
console.log(checkSpam('Some string'));
console.log(checkSpam('xXX TeSt string'));
console.log(checkSpam('ToTal SPAM'));
*/


