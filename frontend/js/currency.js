async function fetchCurrency(userId) {
    const response = await fetch(`/api/currency/${userId}`);
    if (response.ok) {
        const data = await response.json();
        return data.amount || 0;
    }
    else {
        console.error('Error fetching currency: ', response.status);
        return 0;
    }
}

export { fetchCurrency };