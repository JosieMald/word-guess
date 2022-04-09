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

startBtnEl.addEventListener("click", function () {
    var timeLeft = 10;
    lettersGuessed = [];
    toggle = "on";
    var index = Math.floor(Math.random() * wordsArray.length);
    hiddenWord = wordsArray[index];
    displayWord();
    var timeInterval = setInterval(function () {
        timerEL.innerHTML = timeLeft + " seconds remaining";
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            currentWordEl.innerHTML = "YOU LOST!!!"
            toggle = "off";
                losses++;
        } else if (stopTimer == true) {
            clearInterval(timeInterval);
            stopTimer = false;
            wins++;
        }
        else {
            timeLeft--;
        }
    }, 1000);
});

var hiddenWord = "";
var stopTimer = false;
function displayWord() {
    var hiddenWordBlank = "";
    console.log("hiddenWord: " + hiddenWord);
    for (var i = 0; i < hiddenWord.length; i++){
      if(lettersGuessed.includes(hiddenWord[i])){
          hiddenWordBlank = hiddenWordBlank + " " + hiddenWord[i] + " "
        }  else {
            hiddenWordBlank = hiddenWordBlank + " _ "
        }
    }
    currentWordEl.innerHTML = hiddenWordBlank;
    var removedSpaces = hiddenWordBlank.split(" ").join("");
    if(hiddenWord === removedSpaces) {
        currentWordEl.innerHTML = "YOU WON!!!"
        stopTimer = true;
    }
}

document.addEventListener("keydown", function (event) {
    if(toggle == "on"){
        var letter = event.key;
        lettersGuessed.push(letter);
        console.log(lettersGuessed);
        displayWord();
    } else {
        return;
    }
});
