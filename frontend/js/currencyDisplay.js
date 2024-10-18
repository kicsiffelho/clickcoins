function updateCurrencyDisplay(currencyAmount) {
    const currencyDisplay = document.getElementById('currency-display');
    currencyDisplay.innerHTML = `<img id="coin-image" src="${new URL('../assets/coin.png', import.meta.url).href}" alt="Coin">
    ${currencyAmount}`;
}

export { updateCurrencyDisplay };