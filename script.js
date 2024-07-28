"use strict";
function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random() * 3)];
}
function getHumanChoice() {
    return prompt("Enter your choice");
}
// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    playedRounds -= 1;
    console.log(humanChoice + " " + computerChoice);
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
                console.log("Human Score : " + humanScore + " , Computer Score : " + computerScore);
            }
            else {
                console.log("You Lose!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                computerScore += 1;
                console.log("Human Score : " + humanScore + " , Computer Score : " + computerScore);
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You Win!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                humanScore += 1;
                console.log("Human Score : " + humanScore + " , Computer Score : " + computerScore);
            }
            else {
                console.log("You Lose!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                computerScore += 1;
                console.log("Human Score : " + humanScore + " , Computer Score : " + computerScore);
            }
        }
        else if (humanChoice == "scissor") {
            if (computerChoice == "paper") {
                console.log("You Win!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                humanScore += 1;
                console.log("Human Score : " + humanScore + " , Computer Score : " + computerScore);
            }
            else {
                console.log("You Lose!! Your Chose " + humanChoice + " Computer chose " + computerChoice);
                computerScore += 1;
                console.log("Human Score : " + humanScore + " , Computer Score : " + computerScore);
            }
        }
        else {
            console.log("Invalid Input")
        }
    }
}
// let whetherToStartGame = prompt("Enter Choice : 1.Play Game 2.Exit")
// while(whetherToStartGame!=2 || whetherToStartGame.toLowerCase()!= "exit"){
//     playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase());
// }
let playedRounds = 5;
while (playedRounds > 0) {
    playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase());
}
