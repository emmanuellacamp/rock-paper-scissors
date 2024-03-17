function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const restartBtn = document.getElementById('restart');
const outcomeDiv = document.getElementById('outcome');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result;

    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        result = 'Tie';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You Win!";
        playerScore++;
    } else {
        result = "You Lose!";
        computerScore++;
    }
    
    outcomeDiv.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    scoreDiv.textContent = `Score: ${playerScore} : ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            outcomeDiv.textContent += ` You won the game!`;
        } else {
            outcomeDiv.textContent += ` Computer won the game!`;
        }
        // Disable buttons after game ends
        disableButtons();
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    outcomeDiv.textContent = '';
    scoreDiv.textContent = `Score: ${playerScore} : ${computerScore}`;
    enableButtons();
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
restartBtn.addEventListener('click', restartGame);