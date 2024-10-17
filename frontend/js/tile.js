import { spendCurrency } from './currencyTransaction.js';
import { fetchCurrency } from './currency.js';
import { updateCurrencyDisplay } from './currencyDisplay.js';

export function changeBackgroundColor(color, price) {
  const user = clerk.user;
  if (user) {
    const userId = user.id;
    spendCurrency(userId, price)
      .then(async spentAmount => {
        if (spentAmount > 0) {
          localStorage.setItem("background", color);
          // location.href = "main.html";

          const updatedAmount = await fetchCurrency(userId);
          if (updatedAmount !== null) {
            updateCurrencyDisplay(updatedAmount);
          }
        }
        else {
          console.error('Not enough currency to change background color');
        }
      })
      .catch(error => {
        console.error('Error spending currency: ', error);
      });
  }
  else {
    console.error('User not logged in');
  }
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
      let price;
      switch (button.id) {
          case 'bgBlue':
              price = 10;
              changeBackgroundColor('#00a3e9', price);
              break;
          case 'bgBrown':
              price = 20;
              changeBackgroundColor('#b97b56', price);
              break;
          case 'bgCrimson':
              price = 50;
              changeBackgroundColor('#7b0103', price);
              break;
          case 'bgGreen':
              price = 40;
              changeBackgroundColor('#22b14c', price);
              break;
          case 'bgGrey':
              price = 60;
              changeBackgroundColor('#7f7f7f', price);
              break;
          case 'bgOrange':
              price = 150;
              changeBackgroundColor('#fc6a03', price);
              break;
          case 'bgPink':
              price = 40;
              changeBackgroundColor('#eb3780', price);
              break;
          case 'bgRed':
              price = 50;
              changeBackgroundColor('#ed1d25', price);
              break;
      }
    });
  });
  setBackgroundColor();
});