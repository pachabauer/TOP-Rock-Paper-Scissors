function computerPlay() {
  const things = ["Rock", "Paper", "Scissors"];
  const thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function playerPlay() {
  const things = ["Rock", "Paper", "Scissors"];
  let tLen = things.length;
  let valid = false;
  while (valid != true) {
    let input = prompt("Choose Rock, Paper or Scissors");
    input = input[0].toUpperCase() + input.substring(1);
    for (let i = 0; i < tLen; i++) {
      if (input == things[i]) {        
        return input;
      }
    }
  }
}

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

function game() {
  let playerSum = 0;
  let compuSum = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerPlay(), computerPlay());
    if (result[0] == 1) {
      playerSum += 1;
    } else if (result[1] == 1) {
      compuSum += 1;
    }
  }
  console.log(
    `Game result:\nPlayer score: ${playerSum}\nComputer score: ${compuSum}`
  );
}

game();
