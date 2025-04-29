playGame();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

function playRound(humanChoice, computerChoice) {
    let roundMessage;
    const messageDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector("#score");

    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                roundMessage = "It's a tie! Both of you choose Rock";
                break;
            case "paper":
                roundMessage = "You lose! Paper beats Rock";
                computerScore++;
                break;
            case "scissors":
                roundMessage = "You win! Rock beats Scissors";
                humanScore++;
                break;
        }
    }

    if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                roundMessage = "You win! Paper beats Rock";
                humanScore++;
                break;
            case "paper":
                roundMessage = "It's a tie! Both of you choose Paper";
                break;
            case "scissors":
                roundMessage = "You lose! Scissors beats Paper";
                computerScore++;
                break;
        }
    }

    if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                roundMessage = "You lose! Rock beats Scissors";
                computerScore++;
                break;
            case "paper":
                roundMessage = "You win! Scissors beats Paper";
                humanScore++;
                break;
            case "scissors":
                roundMessage = "It's a tie! Both of you choose Scissors";
                break;
        }
    }
    
    messageDiv.textContent = roundMessage;
    scoreDiv.textContent = `Player: ${humanScore}, Computer: ${computerScore}`
    
}

function playGame() {
    // while ((humanScore + computerScore) < 5){
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();

    //     playRound(humanSelection, computerSelection);

    //     console.log(`Player: ${humanScore}, Computer: ${computerScore}`);
    // }

    // if (humanScore > computerScore) {
    //     console.log("You win the game!");
    // } else {
    //     console.log("You lose to the computer! Try again later");
    // }

    getHumanChoice();
}



