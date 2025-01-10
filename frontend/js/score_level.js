let totalCoins = 0;
let level = 1;

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

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('user-level').innerText = level;
  document.getElementById('user-final-score').innerText = totalCoins;
});