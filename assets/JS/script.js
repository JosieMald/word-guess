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

var hiddenWord = "";
var lettersGuessed = [];
var toggle = "off";

startBtn.addEventListener("click", function () {
    var timeLeft = 10;
    lettersGuessed = [];
    toggle = "on";
  displayWord();
  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      console.log("Times up!");
      toggle = "off";
    } else {
      timeLeft--;
      timerEL.innerHTML = timeLeft + " seconds remaining";
    }
  }, 1000);
});

function displayWord() {
  var index = Math.floor(Math.random() * wordsArray.length);
  hiddenWord = wordsArray[index];
  currentWord.innerHTML = wordsArray[index];
}

document.addEventListener("keydown", function (event) {
    if(toggle == "on"){
        var letter = event.key;
        lettersGuessed.push(letter);
        console.log(lettersGuessed);
    } else {
        return;
    }
});
