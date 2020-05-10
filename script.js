var iQ = 0;
var remaining = 60;
var start = document.getElementById("start");
var timer = document.getElementById("timer");
var questionsTitle = document.getElementById("questions");
var choices = document.getElementById("choices");
var startDiv = document.getElementById("start-div");
var titleHeader = document.getElementById("question-title");
var gameDiv = document.getElementById("game-div");
var endDiv = document.getElementById("end-div");
var finalScore = document.getElementById("final");

var timerStart;

function increment() {
  remaining--;
  timer.textContent = remaining;
}

function getQuestion() {
  var cQ = questions[iQ];
  titleHeader.textContent = cQ.title;
  choices.innerHTML = "";
  cQ.choices.forEach(function (choice, i) {
    var selection = document.createElement("button");
    selection.setAttribute("class", "btn btn-primary ml-2");
    selection.setAttribute("value", choice);
    selection.textContent = choice;
    selection.onclick = userSelection;
    choices.appendChild(selection);
  })
}

function init() {
  startDiv.setAttribute("class", "hide");
  gameDiv.removeAttribute("class");
  timerStart = setInterval(increment, 1000);
  timer.textContent = remaining;
  getQuestion();
}

start.onclick = init;