function changeBackgroundColor(color) {
  localStorage.setItem("background", color);
  location.href = "main.html";
}

function setBackgroundColor() {
  const gameAreaColor = localStorage.getItem("background");
  if (gameAreaColor) {
    const gameArea = document.getElementById("game-area");
    if (gameArea) {
      gameArea.style.backgroundColor = gameAreaColor;
    }
  }
}
