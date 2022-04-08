var wordsArray = [
  "JavaScript",
  "variable",
  "function",
  "loop",
  "conditional",
  "object",
  "array",
];

var startBtn = document.getElementById("start-button");
var timerEL = document.getElementById("timer");
var currentWord = document.getElementById("hidden-word");


var timeLeft = 10;
var hiddenWord = [];
var lettersGuessed = [];

startBtn.addEventListener("click", function () {
    displayWord();
  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      console.log("Times up!");
    } else {
        timeLeft--;
      timerEL.innerHTML = timeLeft + " seconds remaining";
    }
  }, 1000);
});

function displayWord() {
    hiddenWord.push(wordsArray[0]);
currentWord.innerHTML = wordsArray[0];
console.log(hiddenWord);
}

document.addEventListener("keydown", function(event){
    var letter = event.key;
    lettersGuessed.push(letter);
    console.log(lettersGuessed);
})