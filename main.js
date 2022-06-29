const probable = ["Rock", "Paper", "Scissors"];
const getRandNumber = document.getElementById("getRandomNumber");
const playerDecks = document.querySelectorAll(".deck");
const compScoreDisplay = document.getElementById("score2");
const humanScoreDisplay = document.getElementById("score1");
const btnReset = document.getElementById("btnReset");
const btnPlayAgain = document.getElementById("btnPlayAgain");
var computerDeck,
  playerSelection,
  computerSelection,
  humanScore = 0,
  computerScore = 0;
gameRounds = 0;

//Reset game
btnReset.addEventListener('click',()=>{
    resetGame();
})

//Replay game
btnPlayAgain.addEventListener('click',()=>{
    replayGame();
})

//Function to Reset game
function resetGame() {
  humanScore = 0, 
  computerScore = 0;
  gameRounds = 0;
  console.log('Reset successful')
}

//Function to RePlay again
function replayGame() {
  if (gameRounds < 5) {
    alert(`Game only be replayed after 5 rounds ${gameRounds}. Click Resest button`);
  } else {
    resetGame();
    console.log("Game reset");
  }
}

//Function to display computer scores
function displayComputerScore() {
  computerScore += 1;
  compScoreDisplay.textContent = computerScore;
}

//Function to display human scores
function displayHumanScore() {
  humanScore += 1;
  humanScoreDisplay.textContent = humanScore;
}

//Function to generate random number
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 3);
};

//Computer guesses either rock, paper or scissors
const computerPlay = () => {
  return probable[generateRandomNumber()];
};

//count game rounds played
function gameRoundsCount() {
  if (gameRounds >= 5) {
    alert("its more than 5");
    alert("👹👺💀Game over💀👺👹");
    // gameRounds = 0;
    // computerScore=0;
    // humanScore=0;
    return false;
  } else {
    gameRounds += 1;
  }
  console.log(`Games played so far: ${gameRounds}`);
}

//Start the game when a deck is clicked
for (let i = 0; i < playerDecks.length; i++) {
  playerDecks[i].addEventListener("click", (e) => {
    e.preventDefault();

    //Player selection
    playerSelection = playerDecks[i].getAttribute("id");

    //Computer
    computerSelection = computerPlay();

    console.log(`Player: ${playerSelection} || Computer: ${computerSelection}`);

    playRound(playerSelection, computerSelection);
  });
}

//Play single round of the game
const playRound = (playerSelection, computerSelection) => {
  if (gameRounds >= 5) {
    console.log("we sopping you now💀💀💀");
    return false;
  }
  if (computerSelection === "Rock" && playerSelection == "Scissors") {
    gameRoundsCount();
    displayComputerScore();
    displayResult("computer", "ROCK");
  } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
    gameRoundsCount();
    displayHumanScore();
    displayResult("human", "ROCK");
  }

  if (computerSelection === "Scissors" && playerSelection == "Paper") {
    gameRoundsCount();
    displayComputerScore();
    displayResult("computer", "SCISSORS");
  } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    gameRoundsCount();
    displayHumanScore();
    displayResult("human", "SCISSORS");
  }

  if (computerSelection === "Paper" && playerSelection == "Rock") {
    gameRoundsCount();
    displayComputerScore();
    displayResult("computer", "PAPER");
  } else if (computerSelection === "Rock" && playerSelection === "Paper") {
    gameRoundsCount();
    displayHumanScore();
    displayResult("human", "PAPER");
  }

  //Check number of game rounds
  //   if (gameRounds >= 5) {
  //     gameRounds = 0;
  //     alert("👹👺💀Game over💀👺👹");
  //     displayComputerScore();
  //     displayHumanScore();
  //     return false;
  //   } else {
  //     alert("continue");
  //   }
};

//Display who wins in single round
const displayResult = (playerType, deckType) => {
  const displayHumanResult = document.getElementById("humanDeck");
  const displayComputerResult = document.getElementById("computerDeck");

  //Computer win round
  if (playerType == "computer") {
    displayComputerResult.textContent = `${playerType} wins❤💻😘 `;
    displayHumanResult.textContent = `HUMAN lost😢 `;
  } else if (playerType == "human") {
    //Human wins the round
    displayHumanResult.textContent = `${playerType} wins 😍😂🤣`;
    displayComputerResult.textContent = `COMPUTER looses 👾☠`;
  }
};
