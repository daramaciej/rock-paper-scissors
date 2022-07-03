function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins.");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins");
    } else if (playerSelection === computerSelection) {
        console.log("Draw")
    } else {
        console.log("Computer wins");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose: Rock / Paper / Scissors");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());



