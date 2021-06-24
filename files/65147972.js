var playerCount = 0;
var computerCount = 0;
var items = ["rock", "paper", "scissors"];
var playerScore = document.querySelector(".player-score");
var computerScore = document.querySelector(".computer-score");
var winner = document.querySelector(".winner");
var btnRock = document.querySelector(".rock");
var btnPaper = document.querySelector(".paper");
var btnScissors = document.querySelector(".scissors");

function getRandomItem() {
  return items[Math.floor(Math.random() * items.length)];
}

btnRock.onclick = function() {
  var randomItem = getRandomItem();
  if (randomItem === items[2]) {
    playerCount++;
    playerScore.textContent = playerCount;
    winner.textContent = 'Player';
  } else if (randomItem === items[0]) {
    winner.textContent = 'Draw';
  } else {
    computerCount++;
    computerScore.textContent = computerCount;
    winner.textContent = 'Computer';
  }
};

btnPaper.onclick = function() {
  var randomItem = getRandomItem();
  if (randomItem === items[0]) {
    playerCount++;
    playerScore.textContent = playerCount;
    winner.textContent = 'Player';
  } else if (randomItem === items[1]) {
    winner.textContent = 'Draw';
  } else {
    computerCount++;
    computerScore.textContent = computerCount;
    winner.textContent = 'Computer';
  }
};

btnScissors.onclick = function() {
  var randomItem = getRandomItem();
  if (randomItem === items[1]) {
    playerCount++;
    playerScore.textContent = playerCount;
    winner.textContent = 'Player';
  } else if (randomItem === items[2]) {
    winner.textContent = 'Draw';
  } else {
    computerCount++;
    computerScore.textContent = computerCount;
    winner.textContent = 'Computer';
  }
};