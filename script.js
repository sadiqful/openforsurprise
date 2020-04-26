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

  for (var i = 0; i < newArray.length; 1++) {
    newArray[i].className = 'letter behind';
    newArray[0].parentElement.style.opacity = 1;
    animateLetterOut(newArray, i)
  }

  initialWord = (initialWord == arrayOfWord.length - 1) ? 0 : initialWord+1;
}

function animateLetterOut(initialWord, i) {
  setTImeout( => () {
    initialWord[i].className = 'letter out'
  }, i*80);
}


function animateLetterIn(initialWord, i) {
  setTImeout( => () {
    initialWord[i].className = 'letter in'
  }, 340+(i*80));
}

function spliLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  arrayOfWord.push(letters);
}
