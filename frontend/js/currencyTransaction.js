async function earnCurrency(userId, amount) {
    const response = await fetch('/api/currency-transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, amount: amount, type: 'earn' }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        return amount;
    }
    else {
        console.error('Error earning currency:', response.status);
        return 0;
    }
}

async function spendCurrency(userId, amount) {
    const response = await fetch('/api/currency-transaction', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, amount: amount, type: 'spend' }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        return amount;
    }
    else {
        console.error('Error earning currency:', response.status);
        return 0;
    }
}

export { earnCurrency, spendCurrency };