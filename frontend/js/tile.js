import { spendCurrency } from './currencyTransaction.js';
import { fetchCurrency } from './currency.js';
import { updateCurrencyDisplay } from './currencyDisplay.js';
import { response } from 'express';

export function changeBackgroundColor(color, price) {
  const user = window.clerk.user;
  if (user) {
    const userId = user.id;
    spendCurrency(userId, price)
      .then(async spentAmount => {
        if (spentAmount > 0) {
          // localStorage.setItem("background", color);
          // location.href = "main.html";
          await fetch('/api/background-color', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId, color})
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to save background color');
            }
          })
          .catch(error => {
            console.error('Error saving background color:', error);
          });
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
        console.error('Error spending currency:', error);
      });
  }
  else {
    console.error('User not logged in');
  }
}

export async function setBackgroundColor() {
  const user = window.clerk.user;
  if (user) {
    const userId = user.id;
    try {
      const response = await fetch(`/api/background-color/${userId}`);
      if (response.ok) {
        const data = await response.json();
        const gameArea = document.getElementById("game-area");
        if (gameArea && data.color) {
          gameArea.style.backgroundColor = data.color;
          //localStorage.getItem("background", data.color);
        }
      }
      else {
        console.error('Error fetching background color:', response.status);
      }
    }
    catch (error) {
      console.error('Error fetching background color:', error);
    }
  }
  else {
    console.error('User not logged in');
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