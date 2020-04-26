var words = document.getElementsByClassName('word');
var arrayOfWord = [];
var arrayCurrent = 0;

words[arrayCurrent].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  spliLetters(words[i]);
}
