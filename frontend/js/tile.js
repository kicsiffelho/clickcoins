import { spendCurrency } from './currencyTransaction.js';
import { fetchCurrency } from './currency.js';
import { updateCurrencyDisplay } from './currencyDisplay.js';
import { postBackgroundColor, fetchBackgroundColor } from './background.js';

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
      }
      else {
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

async function updateButtons(userId) {
  try {
      const response = await fetch(`/api/user-backgrounds/${userId}`);
      const ownedBackgrounds = await response.json();

      document.querySelectorAll('.btn-secondary').forEach(button => {
          const buttonId = button.getAttribute('id');
          if (ownedBackgrounds.includes(buttonId)) {
              button.textContent = 'Owned';
              button.classList.replace('btn-secondary', 'btn-success');
              button.setAttribute('disabled', true);
          } else {
              button.addEventListener('click', () => handlePurchase(buttonId, userId));
          }
      });
  } catch (error) {
      console.error('Error fetching user backgrounds:', error);
  }
}

async function handlePurchase(buttonId, userId) {
  try {
      const purchaseResponse = await fetch(`/api/purchase-background/${userId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ backgroundId: buttonId })
      });

      if (purchaseResponse.ok) {
          const button = document.getElementById(buttonId);
          button.textContent = 'Owned';
          button.classList.replace('btn-secondary', 'btn-success');
          button.setAttribute('disabled', true);
      } else {
          console.error('Purchase failed or item already owned.');
      }
  } catch (error) {
      console.error('Error during purchase:', error);
  }
}

function waitForUserId() {
  if (window.userId) {
      updateButtons(window.userId);
  } else {
      setTimeout(waitForUserId, 100);
  }
}

document.addEventListener('DOMContentLoaded', waitForUserId);