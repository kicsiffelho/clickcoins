async function storeScore(score) {
    const user = clerk.user;
    if (user) {
        const userId = user.id;
        const response = await fetch('/api/store-score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId, score})
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Score stored:', data);
        }
        else {
            const errorData = await response.text();
            console.error('Error storing score:', response.status, errorData);
        }
    }
    else {
        console.error('User not logged in');
    }
}

export { storeScore };