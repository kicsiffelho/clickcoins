let score = 0;
let timeLeft = 10;
let coinInterval;
let timerInterval;

const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startOverlay = document.getElementById('start-overlay');

// Start game
function startGame() {

    // Reset score and timer
    score = 0;
    timeLeft = 10;
    updateScoreDisplay();
    upadteTimerDisplay();

    // Remove overlay
    startOverlay.style.display = 'none';
    gameArea.style.display = 'block';
    scoreDisplay.style.display = 'block';
    timerDisplay.style.display = 'block';

    coinInterval = setInterval(createCoin, 950);
    timerInterval = setInterval(upadteTimer, 950);
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function upadteTimerDisplay() {
    timerDisplay.textContent = `Time Left: ${timeLeft}`;
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
    coin.src = '../assets/coin.png';
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

function upadteTimer() {
    if (timeLeft <= 0) return;

    timeLeft--;
    upadteTimerDisplay();
    if (timeLeft <= 0) {
        clearInterval(coinInterval);
        clearInterval(timerInterval);
        alert(`Game over! Final score: ${score}`);

        window.location.href = 'main.html';
    }
}

document.getElementById('start-button').onclick = startGame;