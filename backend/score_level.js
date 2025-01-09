app.post('/api/storeScore', async (req, res) => {
  const { userId, score, level } = req.body;
  await db.collection('scores').insertOne({ userId, score, level, date: new Date() });
});

async function storeScore(userId, score, level) {
  const response = await fetch('/api/storeScore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, score, level }),
  });
}
