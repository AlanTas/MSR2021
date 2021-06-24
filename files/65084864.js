function abaTranslate(sentence) {
  const vowels = 'AEIOUaeiou';
  var newStr = "";

  for (var i = 0; i < sentence.length; i++) {
    var currentCharacter = sentence[i];
    if (vowels.includes(currentCharacter)) { // the current character is a vowel
      newStr += currentCharacter + "b" + currentCharacter;
    } else {
      newStr += currentCharacter; // just add the character if it is not a vowel
    }
  }
  return newStr;
}

console.log(abaTranslate("Cats and dogs")); // returns "Cabats aband dobogs"