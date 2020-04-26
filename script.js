var words = document.getElementsByClassName('word');
var arrayOfWord = [];
var arrayCurrent = 0;

words[arrayCurrent].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  spliLetters(words[i]);
}

function changeWord() {
  var initialWord = arrayOfWord[arrayCurrent];
  var newArray = arrayCurrent == words.length - 1 ? arrayOfWord[0] : arrayOfWord[arrayCurrent+1];
  for (var i = 0; i < initialWord.length; i++) {
    animateLetterOut(initialWord, i)
  }
}
