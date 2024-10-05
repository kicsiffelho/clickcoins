export function changeBackgroundColor(color) {
  localStorage.setItem("background", color);
  location.href = "main.html";
}

export function setBackgroundColor() {
  const gameAreaColor = localStorage.getItem("background");
  const gameArea = document.getElementById("game-area");
  if (gameArea && gameAreaColor) {
      gameArea.style.backgroundColor = gameAreaColor;
  }
}

document.getElementById('bgBlue').addEventListener('click', function(event) {
  event.preventDefault();
  changeBackgroundColor('#0000FF');
});