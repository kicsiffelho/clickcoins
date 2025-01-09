async function storeScore(userId, score, level) {
  const response = await fetch('/api/storeScore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, score, level }),
  });
}
