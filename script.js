let pScore = 0;
let cScore = 0;

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
        pScore = pScore + 1;
        return ("You won! " + p + " beats " + c);
    } else if (outcome == 0) {
        return ("It's a draw! You both picked " + p);
    } else {
        cScore = cScore + 1;
        return ("You lost :( " + c + " beats " + p);
    }
}

let button1 = document.createElement('button')
button1.innerText = 'Rock'
button1.id = 'rockButton'
button1.addEventListener('click', function() {
    let c = getComputerChoice();
    document.getElementById("results").innerHTML = playRound('rock', c);
    document.getElementById("playerScore").innerHTML = "Player score: " + pScore;
    document.getElementById("computerScore").innerHTML = "Computer score: " + cScore;
    if (pScore == 5) {
        document.getElementById("gameOver").innerHTML = "Player wins! Game over! Refresh to play again!";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
    if (cScore == 5) {
        document.getElementById("gameOver").innerHTML = "Computer wins! Game over! Refresh to play again!";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
});
document.body.appendChild(button1)

let button2 = document.createElement('button')
button2.innerText = 'Paper'
button2.id = 'paperButton'
button2.addEventListener('click', function() {
    let c = getComputerChoice();
    document.getElementById("results").innerHTML = playRound('paper', c);
    document.getElementById("playerScore").innerHTML = "Player score: " + pScore;
    document.getElementById("computerScore").innerHTML = "Computer score: " + cScore;
    if (pScore == 5) {
        document.getElementById("gameOver").innerHTML = "Player wins! Game over! Refresh to play again!";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
    if (cScore == 5) {
        document.getElementById("gameOver").innerHTML = "Computer wins! Game over! Refresh to play again!";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }

});
document.body.appendChild(button2)

let button3 = document.createElement('button')
button3.innerText = 'Scissors'
button3.id = 'scissorsButton'
button3.addEventListener('click', function() {
    let c = getComputerChoice();
    document.getElementById("results").innerHTML = playRound('scissors', c);
    document.getElementById("playerScore").innerHTML = "Player score: " + pScore;
    document.getElementById("computerScore").innerHTML = "Computer score: " + cScore;
    if (pScore == 5) {
        document.getElementById("gameOver").innerHTML = "Player wins! Game over! Refresh to play again!";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
    if (cScore == 5) {
        document.getElementById("gameOver").innerHTML = "Computer wins! Game over! Refresh to play again!";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
});
document.body.appendChild(button3)

