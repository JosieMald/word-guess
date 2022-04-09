var wordsArray = [
  "JavaScript",
  "variable",
  "function",
  "loop",
  "conditional",
  "object",
  "array",
];

var startBtnEl = document.getElementById("start-button");
var timerEL = document.getElementById("timer");
var currentWordEl = document.getElementById("hidden-word");

var lettersGuessed = [];
var toggle = "off";
var wins = 0;
var losses = 0;
var hiddenWord = "";
var stopTimer = false;

startBtnEl.addEventListener("click", function () {
  var timeLeft = 10;
  var index = Math.floor(Math.random() * wordsArray.length);
  lettersGuessed = [];
  toggle = "on";
  hiddenWord = wordsArray[index];
  displayWord();
  var timeInterval = setInterval(function () {
    timerEL.innerHTML = timeLeft + " seconds remaining";
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      currentWordEl.innerHTML = "YOU LOST!!!";
      toggle = "off";
      losses++;
    } else if (stopTimer == true) {
      toggle = "off";
      clearInterval(timeInterval);
      stopTimer = false;
      wins++;
    } else {
      timeLeft--;
    }
  }, 1000);
});

function displayWord() {
  var hiddenWordBlank = "";
  for (var i = 0; i < hiddenWord.length; i++) {
    if (lettersGuessed.includes(hiddenWord[i])) {
      hiddenWordBlank = hiddenWordBlank + " " + hiddenWord[i] + " ";
    } else {
      hiddenWordBlank = hiddenWordBlank + " _ ";
    }
  }
  currentWordEl.innerHTML = hiddenWordBlank;
  var removedSpaces = hiddenWordBlank.split(" ").join("");
  if (hiddenWord === removedSpaces) {
    currentWordEl.innerHTML = "YOU WON!!!";
    stopTimer = true;
  }
}

document.addEventListener("keydown", function (event) {
  if (toggle == "on") {
    var letter = event.key;
    lettersGuessed.push(letter);
    displayWord();
  } else {
    return;
  }
});

// 1. create element to display win and loses.
// 2. Store those values in local storage.
// 3. click event for clear local storage and clear values.
