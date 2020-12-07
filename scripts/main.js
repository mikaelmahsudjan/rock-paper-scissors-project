
//Required variables, and references for buttons and score display
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const compChoice = document.querySelector("#comp-choice")
const newGameBtn = document.querySelector("#newGameBtn");
const playerScoreBoard = document.querySelector("#user");
const computerScoreBoard = document.querySelector("#computer");
const roundResults = document.querySelector("#roundResults");
const buttons = document.querySelectorAll(".buttons");

const loss = "Oh no, you lose! ";
const win = "Yay, you win! ";
const tie = "The result is a tie! ";
let computerScore = 0;
let playerScore = 0;


// Computer selection
function computerSelection() {
    let computerSelect = Math.floor(Math.random() * 3);
    if (computerSelect === 1) {
        return "rock";
    } else if (computerSelect === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Play one round of the game and return the winner
function playRound(playerSelect, computerSelect) {
    if (playerSelect === computerSelect) {
        return roundResults.textContent = tie;
    } else if (
        playerSelect === "rock" && computerSelect === "paper" ||
        playerSelect === "paper" && computerSelect === "scissors" ||
        playerSelect === "scissors" && computerSelect === "rock") {

        computerScore++;
        return roundResults.textContent = loss + computerSelect + " " + "beats" + " " + playerSelect;
    } else if (
        playerSelect === "rock" && computerSelect === "scissors" ||
        playerSelect === "paper" && computerSelect === "rock" ||
        playerSelect === "scissors" && computerSelect === "paper") {

        playerScore++;
        return roundResults.textContent = win + playerSelect + " " + "beats" + " " + computerSelect;
    }
}


function resetGame() {

}

// Gameplay and score
function game() {
    buttons.forEach((button) => {

        button.addEventListener('click', (e) => {
          playerSelect = button.id;
          computerSelect = computerSelection();
          playRound(playerSelect, computerSelect);
          playerScoreBoard.textContent = playerScore + "|";
          computerScoreBoard.textContent = computerScore;

          if (playerScore === 5 || computerScore === 5) {
              if (playerScore > computerScore) {
                alert("YOU WIN!");
            } else if (playerScore < computerScore) {
                alert("YOU LOSE!");
            } else {
                alert("Draw!");
            }
          }
        });
      });
}

game();

