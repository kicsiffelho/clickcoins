app.post('/api/storeScore', async (req, res) => {
  const { userId, score, level } = req.body;
  await db.collection('scores').insertOne({ userId, score, level, date: new Date() });
});
