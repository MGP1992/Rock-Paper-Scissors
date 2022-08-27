
let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let computerScore = 0;
let playerChoice;
const winnerResults = {
  computer: ["You Lost the game, computer wins!!", 'red'],
  player: ["You Won !!", 'green'],
  tie: ["You tied with the computer", 'blue']
};

function selectComputerChoice () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, selectComputerChoice());
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];
  
  if (parseInt(playerSelection) === computerSelection.value) {
    playerPoints.textContent = playerScore + 1
    computerPoints.textContent = computerScore + 1
    roundResults.textContent = "It's a tie!"
  }else if (playerWinCombo.includes(roundWinCombo)) {
    playerPoints.textContent = ++playerScore
    roundResults.textContent = `You win! Computer chose ${computerSelection.choice}`;
  }else {
    computerPoints.textContent = ++computerScore
    roundResults.textContent = `You lose! Computer chose ${computerSelection.choice} `;
  }
  checkOutcome();
}


function checkOutcome() {
  if (computerScore === 5 || playerScore === 5) {
    if (computerScore === playerScore){
      updateWinner('tie')
    }else{
      let winner = `${(computerScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(winner);
    }
  }
}

function updateWinner(winner){
  roundResults.textContent = winnerResults[winner][0];
  // roundResults.style.color = winnerResults[winner][1];
  
  selectionButton.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}


const selectionButton = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click',() => location.reload());
  
selectionButton.forEach(button => { button.addEventListener('click', getPlayerChoice) });












