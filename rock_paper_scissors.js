const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const bodies = document.querySelector("body");

let humanScore = 0;
let computerScore = 0;
let clicked = 0;

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Human wins this round!");
    return "human";
  } else {
    console.log("Computer wins this round!");
    return "computer";
  }
}

function playGame(humanSelection) {
  const computerSelection = getComputerChoice();
  const winner = playRound(humanSelection, computerSelection);
  
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
  clicked++;
  
  const scoreDiv = document.createElement("div");
  const scoreSpan = document.createElement("span");
  bodies.append(scoreDiv);
  scoreDiv.append(scoreSpan);
  scoreSpan.textContent = `Round: ${clicked} Human Score: ${humanScore} (${humanSelection}) Computer Score: ${computerScore} (${computerSelection})`;

  checkForWinner();
}

function checkForWinner() {
  if (humanScore === 5 && humanScore > computerScore) {
    alert(`You won! Your score: ${humanScore}, Computer score: ${computerScore}`);
  } else if (computerScore === 5 && computerScore > humanScore) {
    alert(`The computer won! Your score: ${humanScore}, Computer score: ${computerScore}`);
  }
}