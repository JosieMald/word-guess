// ARRAYS AND OBJECTS -------------------------------------------
var wordsArray = [
  "JavaScript",
  "variable",
  "function",
  "loop",
  "conditional",
  "object",
  "array",
];

var scoreBoard = {
    wins: 0,
    losses: 0,
}

// DOM ELEMENTS -------------------------------------------------
var startBtnEl = document.getElementById("start-button");
var timerEL = document.getElementById("timer");
var currentWordEl = document.getElementById("hidden-word");
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");

// VARIABLES -----------------------------------------------------
var lettersGuessed = [];
var toggle = "off";
var hiddenWord = "";
var stopTimer = false;


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

function displayScore() {
    localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard))
    var savedScoreBoard = JSON.parse(localStorage.getItem("scoreBoard"))
    if(scoreBoard.wins == 0){
        winsEl.innerHTML = "Wins: ";
    } else {
        winsEl.innerHTML = "Wins: " + savedScoreBoard.wins;
        console.log(savedScoreBoard.wins);
    }
    if(scoreBoard.losses == 0){
        lossesEl.innerHTML = "Losses: ";
    } else {
        lossesEl.innerHTML = "Losses: " + savedScoreBoard.losses;
        console.log(savedScoreBoard.losses);
    }
}
displayScore();

// EVENT LISTENERS -----------------------------------------------
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
        scoreBoard.losses++;
        displayScore();
      } else if (stopTimer == true) {
        toggle = "off";
        clearInterval(timeInterval);
        stopTimer = false;
        scoreBoard.wins++;
        displayScore();
      } else {
        timeLeft--;
      }
    }, 1000);
  });

document.addEventListener("keydown", function (event) {
  if (toggle == "on") {
    var letter = event.key;
    lettersGuessed.push(letter);
    displayWord();
  } else {
    return;
  }
});

// 2. Store those values in local storage.
// 3. click event for clear local storage and clear values.
