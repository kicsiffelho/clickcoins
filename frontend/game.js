let score = 0;
let timeLeft = 30;
let coinInterval;
let timerInterval;
let difficultyInterval;
let coinIntervalTime = 800;

const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startOverlay = document.getElementById('start-overlay');
const scoreModal = document.getElementById('score-modal');
const tryAgainButton = document.getElementById('try-again-button');
const closeModalButton = document.getElementById('close-modal');

// Start game
function startGame() {

    // Reset score and timer
    score = 0;
    timeLeft = 30;
    coinIntervalTime = 800;
    updateScoreDisplay();
    updateTimerDisplay();

    // Remove overlay
    startOverlay.style.display = 'none';
    gameArea.style.display = 'block';
    scoreDisplay.style.display = 'block';
    timerDisplay.style.display = 'block';
    scoreModal.style.display = 'none';

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

// Generate random positions for coins
function generateRandomPosition() {
    const x = Math.random() * (gameArea.offsetWidth - 60);
    const y = Math.random() * (gameArea.offsetHeight - 60);
    return { x, y };
}

function createCoin() {
    if (timeLeft <= 0) return;

    const coin = document.createElement('img');
    coin.src = './assets/coin-image.png';
    coin.classList.add('coin');
    const { x, y } = generateRandomPosition();
    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;

    // Remove coin when clicked
    coin.addEventListener('click', () => {
        gameArea.removeChild(coin);
        score++;
        updateScoreDisplay();
    });

    // Add coin
    gameArea.appendChild(coin);

    // Remove coin after 1 second if not clicked
    setTimeout(() => {
        if (gameArea.contains(coin)) {
            gameArea.removeChild(coin);
        }
    }, 1000)
}

function updateTimer() {
    if (timeLeft <= 0) return;

    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
        clearInterval(coinInterval);
        clearInterval(timerInterval);
        clearInterval(difficultyInterval);
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
    document.getElementById('final-score').textContent = `Final score: ${score}`;
    scoreModal.style.display = 'block';
}

document.getElementById('start-button').onclick = startGame;

tryAgainButton.onclick = function() {
    startGame();
};

scoreModal.style.display = 'none';

closeModalButton.onclick = function() {
    scoreModal.style.display = 'none';
    window.location.href = 'main.html';
}