async function postBackgroundColor(userId, color) {
    try {
        const response = await fetch('/api/background-color', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, color})
        });
        if (!response.ok) {
            throw new Error('Failed to save background color');
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

async function isBackgroundOwned(userId, color) {
    try {
        const response = await fetch(`/api/backgrounds-colors/${userId}`);
        if(response.ok) {
            const colors = await response.json();
            const ownedColor = colors.find(c => c.color === color);
            return ownedColor ? ownedColor.owned : false;
        }
        else {
            console.error('Error fetching if background color owned: ', response.status);
            return false;
        }
    }
    catch (error) {
        console.error('Error fetching if background color owned: ', error);
        return false;
    }
}

export { postBackgroundColor, fetchBackgroundColor, isBackgroundOwned };