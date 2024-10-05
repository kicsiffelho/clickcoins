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
  const bgButton = document.querySelectorAll('#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed');
  bgButton.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      switch (button.id) {
          case 'bgBlue':
              changeBackgroundColor('#00a3e9');
              break;
          case 'bgBrown':
              changeBackgroundColor('#b97b56');
              break;
          case 'bgCrimson':
              changeBackgroundColor('#7b0103');
              break;
          case 'bgGreen':
              changeBackgroundColor('#22b14c');
              break;
          case 'bgGrey':
              changeBackgroundColor('#7f7f7f');
              break;
          case 'bgOrange':
              changeBackgroundColor('#fc6a03');
              break;
          case 'bgPink':
              changeBackgroundColor('#eb3780');
              break;
          case 'bgRed':
              changeBackgroundColor('#ed1d25');
              break;
      }
    });
  });
  setBackgroundColor();
});