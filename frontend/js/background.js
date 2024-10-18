import { changeBackgroundColor } from "./tile";

async function postBackgroundColor(userId, color) {
    try {
        const response = await fetch('/api/background-color', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, color })
        });
        const data = await response.json();
        if (data.owned) {
            updateToChangeColor(color, data.owned);
            console.log('You already own this color');
        }
        else {
            updateToChangeColor(color, data.owned);
            console.log('Color purchased');
        }
    }
    catch (error) {
        console.error('Error saving background color:', error);
    }
}

async function fetchBackgroundColor(userId) {
    try {
        const response = await fetch(`/api/background-color/${userId}`);
        if (response.ok) {
            const data = await response.json();
            return data.color;
        }
        else {
            console.error('Error fetching background color:', response.status);
        }
    }
    catch (error) {
        console.error('Error fetching background color:', error);
    }
}

const colorMap = {
    '#00a3e9': 'bgBlue',
    '#b97b56': 'bgBrown',
    '#7b0103': 'bgCrimson',
    '#22b14c': 'bgGreen',
    '#7f7f7f': 'bgGrey',
    '#fc6a03': 'bgOrange',
    '#eb3780': 'bgPink',
    '#ed1d25': 'bgRed'
}

async function updateToChangeColor(color, owned) {
    const buttonId = colorMap[color];
    const button = document.getElementById(buttonId);
    if (button) {
        if (owned) {
            button.textContent = "Change";
            button.onclick = () => changeBackgroundColor(color);
        }
        else {
            button.textContent = "Add";
            button.onclick = null;
        }
    }
}

export { postBackgroundColor, fetchBackgroundColor, updateToChangeColor };