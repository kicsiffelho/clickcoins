import { storeScore } from "./score.js";
import { fetchCurrency } from "./currency.js";
import { earnCurrency } from "./currencyTransaction.js";
import { updateCurrencyDisplay } from "./currencyDisplay.js";
import { fetchBackgroundColor } from "./background.js";

let score = 0;
let timeLeft = 30;
let coinInterval;
let timerInterval;
let difficultyInterval;
let coinIntervalTime = 800;
let currencyAmount = 0;
let gameInProgress = false;
let totalCoins = 0;
let level = 1;

const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startOverlay = document.getElementById("start-overlay");
const scoreModal = document.getElementById("score-modal");
const tryAgainButton = document.getElementById("try-again-button");
const closeModalButton = document.getElementById("close-modal");
const coinSound = new Audio(new URL("../assets/click.wav", import.meta.url).href);

async function initalizeCurrency() {
  const user = window.clerk.user;
  if (user) {
    const userId = user.id;
    currencyAmount = await fetchCurrency(userId);
    if (currencyAmount !== null) {
      updateCurrencyDisplay(currencyAmount);
    }
    const backgroundColor = await fetchBackgroundColor(userId);
    if (backgroundColor) {
      gameArea.style.backgroundColor = backgroundColor;
    } else {
      console.log("No background color set for this user");
    }
  } else {
    console.error("User not logged in");
  }
}

function startGame() {
  gameInProgress = true;
 
  score = 0;
  timeLeft = 30;
  coinIntervalTime = 800;
  updateScoreDisplay();
  updateTimerDisplay();

  startOverlay.style.display = "none";
  gameArea.style.display = "block";
  scoreDisplay.style.display = "block";
  timerDisplay.style.display = "block";
  scoreModal.style.display = "none";

  createCoin();

  coinInterval = setInterval(createCoin, coinIntervalTime);
  timerInterval = setInterval(updateTimer, 1000);
  difficultyInterval = setInterval(increaseDifficulty, 5000);
}

function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${score}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
}

function generateRandomPosition() {
  const x = Math.random() * (gameArea.offsetWidth - 60);
  const y = Math.random() * (gameArea.offsetHeight - 60);
  return { x, y };
}

function createCoin() {
  if (timeLeft <= 0) return;

  const coin = document.createElement("img");
  coin.src = new URL("../assets/coin.png", import.meta.url).href;
  coin.classList.add("coin");
  const { x, y } = generateRandomPosition();
  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;

  coin.addEventListener("click", () => {
    coinSound.playbackRate = 2;
    coinSound.volume = 0.2;
    coinSound.play();
    gameArea.removeChild(coin);
    score++;
    totalCoins++;
    updateScoreDisplay();
    onCoinCollected(1);
  });


  gameArea.appendChild(coin);

  setTimeout(() => {
    if (gameArea.contains(coin)) {
      gameArea.removeChild(coin);
    }
  }, 1000);
}

function updateTimer() {
  if (timeLeft <= 0) return;

  timeLeft--;
  updateTimerDisplay();
  if (timeLeft <= 0) {
    clearInterval(coinInterval);
    clearInterval(timerInterval);
    clearInterval(difficultyInterval);
    gameInProgress = false;
    showFinalScore();
  }
}

function increaseDifficulty() {
  if (coinIntervalTime > 300) {
    coinIntervalTime -= 100;
    clearInterval(coinInterval);
    coinInterval = setInterval(createCoin, coinIntervalTime);
  }
}

function showFinalScore() {
  document.getElementById("final-score").textContent = `Final score: ${score}`;
  scoreModal.style.display = "block";

  if (!gameInProgress) {
    storeScore(score).then(() => {
      const user = window.clerk.user;
      if (user) {
        const userId = user.id;
        earnCurrency(userId, score)
          .then((earnedAmount) => {
            currencyAmount += earnedAmount;
            updateCurrencyDisplay(currencyAmount);
          })
          .catch((error) => {
            console.error("Error earning currency:", error);
          });
      } else {
        console.error("User not logged in");
      }
    });
  }
}

function updateLevel() {
  if (totalCoins >= 50) {
    level = Math.floor(totalCoins / 50) + 1;
  } else {
    level = 1;
  }
  document.getElementById('user-level').innerText = level;
}

function addCoins(coins) {
  totalCoins += coins;
  updateLevel();
  if (coins >= 8) {
    alert('Next difficulty level');
  }
}

function onCoinCollected(coins) {
  addCoins(coins);
  document.getElementById('user-final-score').innerText = totalCoins;
}


document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('user-level').innerText = level;
  document.getElementById('user-final-score').innerText = totalCoins;
});

document.getElementById("start-button").onclick = function () {
  initalizeCurrency();
  startGame();
};

tryAgainButton.onclick = function () {
  startGame();
};

scoreModal.style.display = "none";

closeModalButton.onclick = function () {
  scoreModal.style.display = "none";
  window.location.href = "main.html";
};