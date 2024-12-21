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
        await postBackgroundColor(userId, color);
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
  const userId = window.clerk.user.id;
  const bgButton = document.querySelectorAll('#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed');
  bgButton.forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      let price
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
    })
  })
  setBackgroundColor();
  updateButtonTexts(userId);
})

export async function updateButtonTexts(userId) {
  console.log('updateButtonTexts called with userId:', userId);
  const bgButtons = document.querySelectorAll('#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed');
  
  if (bgButtons.length === 0) {
    console.error('No buttons found');
    return;
  }

  console.log('Selected buttons:', bgButtons);

  for (const button of bgButtons) {
    let color;

    switch (button.id) {
      case 'bgBlue': color = '#00a3e9'; break;
      case 'bgBrown': color = '#b97b56'; break;
      case 'bgCrimson': color = '#7b0103'; break;
      case 'bgGreen': color = '#22b14c'; break;
      case 'bgGrey': color = '#7f7f7f'; break;
      case 'bgOrange': color = '#fc6a03'; break;
      case 'bgPink': color = '#eb3780'; break;
      case 'bgRed': color = '#ed1d25'; break;
    }

    if (color) {
      try {
        const isOwned = await isBackgroundOwned(userId, color);
        console.log(`Color: ${color}, Owned: ${isOwned}`);
        if (isOwned === true) {
          button.innerText = 'Change';
        } else if (isOwned === false) {
          button.innerText = 'Add';
        }
        else {
          button.innerText = 'Add'
        }
      }
      catch (err) {
        console.error(`Error checking ownership for color ${color}:`, err);
      }
    }
  }
}