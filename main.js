const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * (3 - 0) + 0)]
}

function getUserChoice(){
    const input = prompt("Rock, Paper, Scissors, Shoot!: ").toLowerCase();
    if (choices.includes(input)){
        alert(round(input, getComputerChoice()));
        getUserChoice();
    } else {
        alert("Incorrect input! Try Again.");
        getUserChoice();
    }
}

function round(playerSelection, computerSelection){
    switch(computerSelection){
        case "rock":
            if (playerSelection === "paper"){
                return `You Win! Paper beats Rock`;
            } else {
                return `You Lose! Rock beats Scissors`;
            }
        case "paper":
            if (playerSelection === "scissors"){
                return `You Win! Scissors beat Paper`;
            } else {
                return `You Lose! Paper beats Rock`;
            }
        case "scissors":
            if (playerSelection === "rock"){
                return `You Win! Rock beats Scissors`;
            } else {
                return `You Lose! Scissors beats Paper`;
            }
    }
}

getUserChoice();