var iQ = 0;
var remaining = 60;
var start = document.getElementById("start");
var timer = document.getElementById("timer");
var questionsTitle = document.getElementById("questions");
var choices = document.getElementById("choices");
var startDiv = document.getElementById("start-div");
var titleHeader = document.getElementById("question-title");

var timerStart;

function init() {
  startDiv.setAttribute("class", "hide");
  gameDiv.removeAttribute("class");
  timerStart = setInterval(increment, 1000);
  timer.textContent = remaining;
  getQuestion();
}

start.onclick = init;