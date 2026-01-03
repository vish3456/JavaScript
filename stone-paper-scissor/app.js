let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const scoreCounter = () => {
  user.innerText = userScore;
  comp.innerText = compScore;
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    msg.innerText = `Computer won! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  msg.style.color = "white";
  scoreCounter();
};

const drawGame = (userChoice) => {
  msg.innerText = `It's a draw! You both chose ${userChoice}`;
  msg.style.backgroundColor = "#081b31";
  msg.style.color = "white";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const playgame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame(userChoice);
  } else {
    let userWin;

    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
