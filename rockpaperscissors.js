function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = getRandomInt(3)
    let computerChoice = choiceArray[randomNumber];
    console.log(`Computer selected ${computerChoice}`);
    return computerChoice;
}

function getPlayerChoice() {
    let keepGoing = true;
    while (keepGoing) {
        let playerChoice = prompt('Please enter Rock, Paper or Scissors');
        let correctCasePlayerChoice = correctInputCase(playerChoice);
        if (checkPlayerChoice(correctCasePlayerChoice)){
            keepGoing = false;
            console.log(`Player selected ${correctCasePlayerChoice}`);
            return correctCasePlayerChoice;
            }else alert('Please enter Rock, Paper or Scissors'); 
    }
}
    
function checkPlayerChoice(playerChoice) {
    if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === 'Scissors'){
        return true;
    }else return false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function correctInputCase(playerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    let lowerCaseSlice = lowerCase.slice(1)
    let upperCase = playerSelection.toUpperCase();
    let upperCaseSlice = upperCase.slice(0,1);
    return `${upperCaseSlice}${lowerCaseSlice}`;
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

function playRound() {

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let gameOutcome = (compareChoices(playerChoice, computerChoice));
    return gameOutcome;
}

function playGame() {
    let gameCounter = 1
    let playerWinCount = 0;
    let computerWinCount = 0;
    let drawCounter = 0;
    while(gameCounter < 6) {
        let gameOutcome = playRound();
        if (gameOutcome.includes(`You win!`)) {
            alert(gameOutcome);
            playerWinCount ++;
            gameCounter++;
        }else if (gameOutcome.includes(`You lose!`)){
            alert(gameOutcome);
            computerWinCount ++;
            gameCounter++;
        }else 
            {alert(gameOutcome);
                drawCounter++;
                gameCounter++;}

    }

    alert(`After 5 games the final scores are:
    Player: ${playerWinCount}
    Computer: ${computerWinCount}
    Games drawn: ${drawCounter}`)
}

playGame();
















