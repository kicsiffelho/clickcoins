export async function postBackgroundColor(userId, color) {
    try {
        const response = await fetch('/api/background-color', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, color })
        });
        if (!response.ok) {
            throw new Error('Failed to save background color');
        }
    }
    catch (error) {
        console.error('Error saving background color:', error);
    }
}

export async function fetchBackgroundColor(userId) {
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

export { postBackgroundColor, fetchBackgroundColor };