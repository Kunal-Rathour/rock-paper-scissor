// "use strict";
function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random() * 3)];
}
// function getHumanChoice() {
//     return prompt("Enter your choice");
// }
// // console.log(getHumanChoice());
let humanScore = 0;
const playerScoreHolder = document.querySelector("#player-score");
let computerScore = 0;
const computerScoreHolder = document.querySelector("#computer-score");
const computerButton = document.querySelectorAll(".disabled");
function playRound(humanChoice, computerChoice) {
    // console.log(humanChoice + " " + computerChoice);
    if (humanChoice == computerChoice) {
        console.log("Draw!! You chose " + humanChoice + " Computer chose " + computerChoice);
        console.log("Human Score : " + humanScore + " , Computer Score : " + computerScore);
    }
    else {
        // console.log("You chose " + humanChoice + " Computer chose " + computerChoice);
        if (humanChoice == "rock") {
            if (computerChoice == "scissor") {
                console.log("You Win!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                humanScore += 1;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            }
            else {
                console.log("You Lose!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                computerScore += 1;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You Win!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                humanScore += 1;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            }
            else {
                console.log("You Lose!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                computerScore += 1;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            }
        }
        else if (humanChoice == "scissor") {
            if (computerChoice == "paper") {
                console.log("You Win!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                humanScore += 1;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            }
            else {
                console.log("You Lose!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                computerScore += 1;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            }
        }
        else {
            console.log("Invalid Input")
        }
    }
}
const resetButton = document.querySelector(".reset");

const buttons = document.querySelectorAll(".enabled");
buttons.forEach(button => {
    button.addEventListener('click', () => {

        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        const playerChoice = button.id;
        console.log(button.id)
        playRound(playerChoice, computerChoice);
        if (humanScore == 5 && computerScore < 5) {
            const result = document.querySelector(".result");
            result.style.backgroundColor = "greenyellow"
            result.textContent = "YOU WIN";
            resetButton.addEventListener("click", () => {
                result.style.backgroundColor = "";
                result.textContent = "";
                humanScore = 0;
                computerScore = 0;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            })
        }
        if (humanScore < 5 && computerScore >= 5) {
            const result = document.querySelector(".result");
            result.style.backgroundColor = "red"
            result.textContent = "YOU LOSE";
            resetButton.addEventListener("click", () => {
                result.style.backgroundColor = "";
                result.textContent = "";
                humanScore = 0;
                computerScore = 0;
                playerScoreHolder.innerText = humanScore;
                computerScoreHolder.innerText = computerScore;
            })

        }

    })

})