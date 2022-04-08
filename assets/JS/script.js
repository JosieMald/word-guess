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

var timeLeft = 10;

startBtn.addEventListener("click", function () {
  console.log("clicked");
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
