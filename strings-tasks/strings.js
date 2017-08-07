/**
The function that returns an accepted string with uppercase first char
*/

function makeFirstCharUppercase(string) {
    firstUpperChar = string.charAt(0).toUpperCase();
    userStringBody = string.slice(1);
    newString = firstUpperChar + userStringBody;
    return newString;
}

console.log(makeFirstCharUppercase('jack'));
console.log(makeFirstCharUppercase('robert'));
console.log(makeFirstCharUppercase(''));


