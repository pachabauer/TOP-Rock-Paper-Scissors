function playRound(playerSelection, computerSelection) {
  let playerScore = 0;
  let computerScore = 0;

  // conditional to evaluate if player or computer wins the round
  if (playerSelection == computerSelection) {
    console.log(`Draw --> Player: ${playerScore} Computer: ${computerScore}`);
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log(
      `Paper beats Rock--> Computer: ${++computerScore} Player ${playerScore}`
    );
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    console.log(
      `Rock beats Scissors--> Player ${++playerScore} Computer: ${computerScore}`
    );
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log(
      `Paper beats Rock-> Player ${++playerScore} Computer: ${computerScore}`
    );
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    console.log(
      `Scissors beats Paper--> Computer: ${++computerScore} Player ${playerScore}`
    );
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log(
      `Rock beats Scissors--> Computer: ${++computerScore} Player ${playerScore}`
    );
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log(
      `Scissors beats Paper-> Player ${++playerScore} Computer: ${computerScore}`
    );
  }
  return [playerScore, computerScore];
}

function computerPlay() {
  const things = ["Rock", "Paper", "Scissors"];
  const computerChoice = things[Math.floor(Math.random() * things.length)];
  computerChoiceDisplay.textContent = computerChoice;
  return computerChoice;
}

const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const gameResultDisplay = document.getElementById('game-result');


const buttons = document.querySelectorAll("button");
let playerChoice;
let playerSum = 0;
let compuSum = 0;

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.textContent = playerChoice;
    let jugada = playRound(playerChoice, computerPlay());
    playerSum += jugada[0];
    playerScoreDisplay.textContent = playerSum;    
    compuSum += jugada[1];
    computerScoreDisplay.textContent = compuSum;
    if (playerSum >= 5) {
      gameResultDisplay.textContent = "GAME OVER, YOU WIN !!"
      playerSum = 0;
      compuSum = 0;
    } else if( compuSum >= 5) {
      gameResultDisplay.textContent = "GAME OVER, YOU LOSE !!"
      playerSum = 0;
      compuSum = 0;
    } else {
      gameResultDisplay.textContent = "";
    }
  })
);

function game() {
  let playerResult = 0;
  let compuResult = 0;
  let result = playRound(playerChoice, computerPlay());
  if (result[0] == 1) {
    playerResult = 1;
  } else if (result[1] == 1) {
    compuResult = 1;
  }
  console.log(
    `Game result:\nPlayer score: ${playerResult}\nComputer score: ${compuResult}`
  );
  return [playerResult, compuResult];
}
