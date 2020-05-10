let iQ = 0;
let remaining = 60;
let start = document.getElementById("start");
let timer = document.getElementById("timer");
let questionsTitle = document.getElementById("questions");
let choices = document.getElementById("choices");
let startDiv = document.getElementById("start-div");
let titleHeader = document.getElementById("question-title");
let gameDiv = document.getElementById("game-div");
let endDiv = document.getElementById("end-div");
let finalScore = document.getElementById("final");

let timerStart;

function increment() {
  remaining--;
  timer.textContent = remaining;
}

function getQuestion() {
  let cQ = questions[iQ];
  titleHeader.textContent = cQ.title;
  choices.innerHTML = "";
  cQ.choices.forEach(function (choice, i) {
    let selection = document.createElement("button");
    selection.setAttribute("class", "btn btn-primary ml-2");
    selection.setAttribute("value", choice);
    selection.textContent = choice;
    selection.onclick = userSelection;
    choices.appendChild(selection);
  })
}

function userSelection() {
  if (this.value != questions[iQ].answer) {
    remaining -= 20;
    timer.textContent = remaining;
    if (remaining <= 0) {
      endGame();
    }
  }
  iQ++;
  if (iQ === questions.length) {
    endGame();
  } else {
    getQuestion();
  }
}

function endGame() {
  clearInterval(timerStart);
  gameDiv.setAttribute("class", "hide");
  endDiv.removeAttribute("class");
  finalScore.textContent = remaining;
}

function init() {
  startDiv.setAttribute("class", "hide");
  gameDiv.removeAttribute("class");
  timerStart = setInterval(increment, 1000);
  timer.textContent = remaining;
  getQuestion();
}

start.onclick = init;
