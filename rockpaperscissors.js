function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = getRandomInt(3)
    let computerChoice = choiceArray[randomNumber];
    computerSelection.textContent = `Computer selected ${computerChoice}`;
    return computerChoice;
}

  

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function compareChoices(playerChoice, computerChoice) {

    switch (playerChoice) {
        case 'Rock':
            if (computerChoice === 'Rock') {
                return `It's a draw! You both picked ${computerChoice}!`
            }else  if (computerChoice === 'Paper') {
                return `You lose! Computer picked ${computerChoice}`
            }else return `You win! Computer picked ${computerChoice}`
            break;

        case 'Scissors':
            if (computerChoice === 'Rock') {
                return `You lose! Computer picked ${computerChoice}`
            }else  if (computerChoice === 'Paper') {
                return `You win! computer picked ${computerChoice}`
            }else return `It's a draw! You both picked ${computerChoice}`
            break;

        case 'Paper':
            if (computerChoice === 'Rock') {
                return `You win! Computer picked ${computerChoice}`
            }else  if (computerChoice === 'Paper') {
                return `It's a draw! You both picked ${computerChoice}`
            }else return `You lose! Computer picked ${computerChoice}`
            break;
    }
}

function handleGameCounter(){
    gameCounter++;
    gamesPlayed.textContent = `Games played = ${gameCounter}`
}

function playRound(choice) {
    let playerChoice = choice;
    playerSelection.textContent = `You have selected: ${choice}`;
    let computerChoice = getComputerChoice();
    let gameOutcome = (compareChoices(playerChoice, computerChoice));
    roundResult.textContent = `${gameOutcome}`
    if (gameOutcome.includes(`You win!`)) {
        playerWinCount ++;
        playerScore.textContent = `Current player score = ${playerWinCount}`;
        handleGameCounter();
    }else if (gameOutcome.includes(`You lose!`)){
        computerWinCount ++;
        computerScore.textContent = `Current computer score = ${computerWinCount}`;
        handleGameCounter();
    }else{ 
        drawCounter++;
        gamesDrawn.textContent = `Games drawn = ${drawCounter}`;
        handleGameCounter();
    }
    
}


    // alert(`After 5 games the final scores are:
    // Player: ${playerWinCount}
    // Computer: ${computerWinCount}
    // Games drawn: ${drawCounter}`)

let gameCounter = 0;
let playerWinCount = 0;
let computerWinCount = 0;
let drawCounter = 0;


let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

let playerScore = document.querySelector('#playerscore');
let computerScore = document.querySelector('#computerscore');
let gamesDrawn = document.querySelector('#gamesdrawn');
let gamesPlayed = document.querySelector('#gamesplayed');

let playerSelection = document.querySelector('#playerselection');
let computerSelection = document.querySelector('#computerselection');
let roundResult = document.querySelector('#roundresult');


rockButton.addEventListener('click', () => {playRound('Rock')});
paperButton.addEventListener('click', () => {playRound('Paper')});
scissorsButton.addEventListener('click',() => {playRound('Scissors')});

 












