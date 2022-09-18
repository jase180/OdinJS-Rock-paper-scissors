function getComputerChoice() {
    let n = Math.floor(Math.random() * 3); // return a random integer from 0 to 3
    if (n == 0) {
        return 'Rock'
    } else if (n == 1) {
        return 'Paper'
    } else { 
        return 'Scissors'
    }
}

function 