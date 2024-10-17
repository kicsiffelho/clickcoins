async function fetchCurrency(userId) {
    const response = await fetch(`/api/currency/${userId}`);
    if (response.ok) {
        const data = await response.json();
        return data.amount;
    }
    else {
        console.error('Error fetching currency: ', response.status);
        return null;
    }
}

export { fetchCurrency };