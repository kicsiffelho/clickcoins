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

document.addEventListener('DOMContentLoaded', function() {
  const bgButton = document.querySelectorAll('#bgBlue, #bgRed');
  bgButton.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      switch (button.id) {
        case 'bgBlue':
          changeBackgroundColor('#0000FF');
          break;
      }
    });
  });
  setBackgroundColor();
});