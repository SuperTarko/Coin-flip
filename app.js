let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

function coinFlip() {
  const flip = Math.random();

  let flipResult = "";

  if (flip < 0.5) {
    flipResult = "heads";
  } else if (flip >= 0.5) {
    flipResult = "tails";
  }

  return flipResult;
}

function game(playerChoice) {
  const flipResult = coinFlip();

  let result = "";

  if (flipResult === playerChoice) {
    result = "You win!";
  } else if (flipResult !== playerChoice) {
    result = "You lose!";
  }

  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose!") {
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
}

function updateScoreElement(){
  document.querySelector(".js-score").innerHTML = `Wins: ${score.wins}, Losses ${score.losses}`
}