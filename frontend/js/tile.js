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
      const isOwned = isBackgroundOwned(userId, color);
      console.log('Background owned: ', isOwned);
      console.log(price);

      const spentAmount = await spendCurrency(userId, price);
      console.log('Spent amount: ', spentAmount);
      if (spentAmount > 0) {
        await postBackgroundColor(userId, color);
        const updatedAmount = await fetchCurrency(userId);
        if (updatedAmount !== null) {
          updateCurrencyDisplay(updatedAmount);
        }
        alert('Background changed. Check it out in the game!');
      } else {
        alert('Not enough currency! Earn more coins!');
        console.error('Not enough currency to change background color');
        return;
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


document.addEventListener('DOMContentLoaded', async () => {
  const bgButton = document.querySelectorAll('#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed');
  bgButton.forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      let price, color;
      switch (button.id) {
          case 'bgBlue':
              price = 10;
              color = '#00a3e9';
              break;
          case 'bgBrown':
              price = 20;
              color = '#b97b56';
              break;
          case 'bgCrimson':
              price = 50;
              color = '#7b0103';
              break;
          case 'bgGreen':
              price = 40;
              color = '#22b14c';
              break;
          case 'bgGrey':
              price = 60;
              color = '#7f7f7f';
              break;
          case 'bgOrange':
              price = 150;
              color = '#fc6a03';
              break;
          case 'bgPink':
              price = 40;
              color = '#eb3780';
              break;
          case 'bgRed':
              price = 50;
              color = '#ed1d25';
              break;
      }
      if (button.innerText === 'Change') {
        price = 0;
      }
      await changeBackgroundColor(color, price);
    })
  })
  setBackgroundColor();
})

export async function updateButtonTexts(userId) {
  const bgButtons = document.querySelectorAll('#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed');

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
        } else {
          button.innerText = 'Add';
        }
      }
      catch (error) {
        console.error(`Error checking ownership for color ${color}:`)
      }
    }
  }
}