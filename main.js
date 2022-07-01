function computerPlay() {
    arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection){
    message = ''
    if (playerSelection === computerSelection) {
        message = "It's a TIE";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        message = "You Win! Rock beats Scissors";
        playerScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        message = "You Win! Paper beats Rock";
        playerScore++
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        message = "You Win! Scissors beats Paper";
        playerScore++
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        message = "You Lose! Paper beats Rock";
        computerScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        message = "You Lose! Scissors beats Paper";
        computerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        message = "You Lose! Rock beats Scissors";
        computerScore++;
    }

    return [message, playerScore, computerScore];
}

function game() {
    let res;
    const computerSelection = computerPlay();
    res = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    result.innerText = `${res[0]} your score is ${res[1]}, computer score is ${res[2]}`;
}

let playerSelection = '';
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');
let result = document.getElementById('result');

window.addEventListener('load', () => {
    playerSelection = '';
    playerScore = 0;
    computerScore = 0;
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            game();
        });
        
    });
})




//alert(playRound(playerSelection, computerSelection));