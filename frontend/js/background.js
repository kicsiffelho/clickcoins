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
        const response = await fetch(`/api/background-color/${userId}/${color}`);
        if(response.ok) {
            const data = await response.json();
            return data.owned;
        }
        else {
            console.error('Error fetching if background color owned: ', response.status);
            return false;
        }
    }
    catch {
        console.error('Error fetching if background color owned: ', error);
        return false;
    }
}

export async function updateButtonTexts(userId) {
    const bgButton = document.querySelectorAll('#bgBlue, #bgBrown, #bgCrimson, #bgGreen, #bgGrey, #bgOrange, #bgPink, #bgRed');
    bgButton.forEach(button => {
        button.addEventListener('click', async (event) => {
        event.preventDefault();
        const user = window.clerk.user;
        const userId = user.id; 
        let color;
        switch (button.id) {
            case 'bgBlue':
                color = '#00a3e9';
                break;
            case 'bgBrown':
                color = '#b97b56';
                break;
            case 'bgCrimson':
                color = '#7b0103';
                break;
            case 'bgGreen':
                color = '#22b14c';
                break;
            case 'bgGrey':
                color = '#7f7f7f';
                break;
            case 'bgOrange':
                color = '#fc6a03';
                break;
            case 'bgPink':
                color = '#eb3780';
                break;
            case 'bgRed':
                color = '#ed1d25';
                break;
        };
        const isOwned = await isBackgroundOwned(userId, color);
        if (isOwned) {
            bgButton.textContent = "Change"; 
        }
        else {
            bgButton.textContent = "Add";
        }
        });
})};

export { postBackgroundColor, fetchBackgroundColor, isBackgroundOwned, updateButtonTexts };