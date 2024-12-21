import { spendCurrency } from './currencyTransaction.js';
import { fetchCurrency } from './currency.js';
import { updateCurrencyDisplay } from './currencyDisplay.js';
import { postBackgroundColor, fetchBackgroundColor, isBackgroundOwned } from './background.js';

export async function changeBackgroundColor(color, price) {
  const user = window.clerk.user;
  console.log(user);
  if (user) {
    const userId = user.id;
    try {
      const spentAmount = await spendCurrency(userId, price);
      if (spentAmount > 0) {
        const isOwned = await isBackgroundOwned(userId, color);
        if (!isOwned) {
          await postBackgroundColor(userId, color);
        }
        const updatedAmount = await fetchCurrency(userId);
        if (updatedAmount !== null) {
          updateCurrencyDisplay(updatedAmount);
        }
        alert('Background changed. Check it out in the game!');
      }
      else {
        alert('Not enough currency! Earn more coins!');
        console.error('Not enough currency to change background color');
      }
    }
    catch (error) {
      console.error('Error spending currency:', error);
    }
  }
  else {
    console.error('User not logged in changebg');
    return;
  }
}

export async function setBackgroundColor() {
  const user = window.clerk.user;
  console.log(user);
  if (user) {
    const userId = user.id;
    const color = await fetchBackgroundColor(userId);
    if (color) {
      updateGameAreaBackground(color);
    }
  }
  else {
    console.error('User not logged in setbg');
    return;
  }
}

function updateGameAreaBackground(color) {
  const gameArea = document.getElementById("game-area");
  if (gameArea && color) {
    gameArea.style.backgroundColor = color;
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const bgButton = document.querySelectorAll('#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed');
  bgButton.forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const user = window.clerk.user;
      const userId = user.id; 
      let price;
      switch (button.id) {
          case 'bgBlue':
              price = 10;
              changeBackgroundColor('#00a3e9', price, button.id);
              break;
          case 'bgBrown':
              price = 20;
              changeBackgroundColor('#b97b56', price, button.id);
              break;
          case 'bgCrimson':
              price = 50;
              changeBackgroundColor('#7b0103', price, button.id);
              break;
          case 'bgGreen':
              price = 40;
              changeBackgroundColor('#22b14c', price, button.id);
              break;
          case 'bgGrey':
              price = 60;
              changeBackgroundColor('#7f7f7f', price, button.id);
              break;
          case 'bgOrange':
              price = 150;
              changeBackgroundColor('#fc6a03', price, button.id);
              break;
          case 'bgPink':
              price = 40;
              changeBackgroundColor('#eb3780', price, button.id);
              break;
          case 'bgRed':
              price = 50;
              changeBackgroundColor('#ed1d25', price, button.id);
              break;
      }
      const isOwned = await isBackgroundOwned(userId, color); 
      if (isOwned) {
        button.textContent = "Change"; 
      };
    });
  });
  setBackgroundColor();
});