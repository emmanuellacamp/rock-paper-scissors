function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));


function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase()
    if (playerChoice === computerChoice) {
        return 'Tie';
    } else if (playerChoice === 'rock' && computerChoice === 'paper'){
        return "You Lose! Paper beats Rock";
    } else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        return "You Lose! Rock beats Scissors";
    } else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        return "You Lose! Scissors beats Paper";
    } else {
        return "You Win!";
    }
};

// function game (){
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++){
//         const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
//         const computerChoice = getComputerChoice();
//         console.log(`You chose ${playerChoice}, computer chose ${computerChoice}`);

//         const result = playRound(playerChoice, computerChoice);
//         console.log(`${result}\n`);

//         if (result.includes(win)){
//             playerScore++;
//         } else if (result.includes(lose)){
//             computerScore++;
//             }
//         }

//         if (playerScore === computerScore){
//             return "Tie Game";
//         } else if (playerScore > computerScore){
//             return `Your score: ${playerScore}. Computer score: ${computerScore}. You lose. `
//         } else {
//             return `Your score: ${playerScore}. Computer score: ${computerScore}. You win. `
//         }
//     }

// console.log(game());
