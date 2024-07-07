function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        console.log("rock");
        return "rock";
    } else if (computerChoice === 2) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    let sign = prompt("Rock, Paper or Scissors?");
    if (sign.toLowerCase() === "rock") {
        console.log("rock");
        return "rock";
    } else if (sign.toLowerCase() === "paper") {
        console.log("paper");
        return "paper";
    } else if (sign.toLowerCase() === "scissors") {
        console.log("scissors");
        return "scissors";
    } else {
        alert("Wrong input! Try again!");
        return getHumanChoice(); // Recursively ask for input until a valid choice is made
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
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

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const winner = playRound(humanSelection, computerSelection);

        if (winner === "human") {
            humanScore += 1;
        } else if (winner === "computer") {
            computerScore += 1;
        }

        console.log(`Round ${i + 1}: Human Score: ${humanScore} Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();