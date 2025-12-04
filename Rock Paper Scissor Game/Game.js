// Selecting all important elements from the page
const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const historyBox = document.getElementById("history");

// Game scores
let playerScore = 0;
let computerScore = 0;

// Computer randomly picks Rock, Paper or Scissors
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Deciding win / lose / draw
function decideWinner(player, computer) {
  if (player === computer) return "draw";

  const winCases =
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper");

  return winCases ? "win" : "lose";
}

// Updating the score UI
function updateScore(result) {
  if (result === "win") playerScore++;
  else if (result === "lose") computerScore++;

  scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Adding a match result entry to history
function addHistory(player, computer, result) {
  const entry = document.createElement("div");
  entry.textContent = `You chose ${player}, computer chose ${computer}: ${result.toUpperCase()}`;
  historyBox.prepend(entry);
}

// Main game function
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = decideWinner(playerChoice, computerChoice);

  resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You ${result}!`;

  updateScore(result);
  addHistory(playerChoice, computerChoice, result);

  // 🔔 SHOW ALERT IF WIN / LOSE / DRAW
  if (result === "win") {
    alert("🎉 You won this round!");
  } else if (result === "lose") {
    alert("😢 You lost this round!");
  } else if (result === "draw") {
    alert("😐 It's a draw!");
  }
}

// Adding click event to each choice button
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.id);
  });
});

// Reset button
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  scoreText.textContent = `Player: 0 | Computer: 0`;
  resultText.textContent = "Make your move!";
  historyBox.innerHTML = "";
}
