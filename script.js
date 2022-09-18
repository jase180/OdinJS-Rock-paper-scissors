function getComputerChoice() {
    let n = Math.floor(Math.random() * 3); // return a random integer from 0 to 3
    if (n == 0) {
        return 'rock';
    } else if (n == 1) {
        return 'paper';
    } else { 
        return 'scissors';
    }
}

function playRound(p, c) {
    // change input to lower so no matter what player inputs it will be fine
    p = p.toLowerCase();
    outcome = 0;
    if (p == 'rock') {
        if (c == 'rock') {
            outcome = outcome + 0;  // draw
        } else if (c == 'paper') {
            outcome = outcome - 1; // lose
        } else {
            outcome = outcome + 1; // win
        }
    } else if (p == 'paper') {
        if (c == 'rock') {
            outcome = outcome + 1;  // win
        } else if (c == 'paper') {
            outcome = outcome + 0; // draw
        } else {
            outcome = outcome - 1; // lose
        }        
    } else {
        if (c == 'rock') {
            outcome = outcome - 1;  // lose
        } else if (c == 'paper') {
            outcome = outcome + 1; // win
        } else {
            outcome = outcome + 0; // draw
        }
    }

    //check outcome and print message
    if (outcome == 1) {
        return ("You won!");
    } else if (outcome == 0) {
        return ("It's a draw!");
    } else {
        return ("You lost :(");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock paper scissors");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();