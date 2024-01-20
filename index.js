function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


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

const playerChoice = 'paper';
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));

