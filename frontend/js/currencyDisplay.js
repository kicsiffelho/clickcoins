function updateCurrencyDisplay(currencyAmount) {
    const currencyDisplay = document.getElementById('currency-display');
    currencyDisplay.innerHTML = ''

    const coinImage = document.createElement('img');
    coinImage.src = new URL('../assets/coin.png', import.meta.url).href;
    coinImage.alt = 'Coin';
    coinImage.style.width = '40px';
    coinImage.style.height = '40px';

    const amountDisplay = document.createElement('div');
    amountDisplay.textContent = currencyAmount;
    amountDisplay.style.marginLeft = '20px';

    currencyDisplay.appendChild(coinImage);
    currencyDisplay.appendChild(amountDisplay);
}

export { updateCurrencyDisplay };