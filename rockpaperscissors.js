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
    if (playerChoice === computerChoice) {
      return 0;
    }
  
    switch (playerChoice) {
      case "Rock":
        if (computerChoice === "Scissors") {
          return 1;
        }
        break;
  
      case "Scissors":
        if (computerChoice === "Paper") {
          return 1;
        }
        break;
  
      case "Paper":
        if (computerChoice === "Rock") {
          return 1;
        }
        break;
  
        default:
          break;
    }
        return 2;
  }
  

function handleGameCounter(){
    gameCounter++;
    gamesPlayed.textContent = `Games played = ${gameCounter}`
}

function gameCheck(gameCounter){
    if(gameCounter === 5) {
        if (playerScore > computerScore) {
            alert("Player wins best of 5 games!")
        }else if (playerScore < computerScore) {
            alert("Computer wins best of 5 games!")
        }else {alert("After 5 games it's a draw!")

        location.reload();
    }

    }else return;

}


function playRound(choice) {
    let playerChoice = choice;
    playerSelection.textContent = `You have selected: ${choice}`;
    let computerChoice = getComputerChoice();
    let gameOutcome = (compareChoices(playerChoice, computerChoice));
    if (gameOutcome == 1) {
        playerWinCount ++;
        playerScore.textContent = `Current player score = ${playerWinCount}`;
        handleGameCounter();
        roundResult.textContent = `You win! Computer picked ${computerChoice}`
    }else if (gameOutcome == 2){
        computerWinCount ++;
        computerScore.textContent = `Current computer score = ${computerWinCount}`;
        handleGameCounter();
        roundResult.textContent = `You lose! Computer picked ${computerChoice}`
    }else{ 
        drawCounter++;
        gamesDrawn.textContent = `Games drawn = ${drawCounter}`;
        handleGameCounter();
        roundResult.textContent = `It's a draw! You both picked ${computerChoice}`
    }
    gameCheck(gameCounter);


    
}

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

 












