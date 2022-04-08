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

var timeLeft = 10;

startBtn.addEventListener("click", function () {
  console.log("clicked");
  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      console.log("Times up!");
    } else {
      console.log(timeLeft);
      timeLeft--;
    }
  }, 1000);
});
