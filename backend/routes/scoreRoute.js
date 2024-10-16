const express = require('express');
const router = express.Router();
const { Score } = require('../db_connect');

router.post('/store-score', async (req, res) => {
    const { userId, score } = req.body;
    const newScore = new Score({ userId, score });
    try {
        await newScore.save();
        console.log('Score added');
        return res.status(200).json({ message: 'Score stored successfully' });
    }
    catch (error) {
        console.error('Error adding score:', error);
        return res.status(500).json({ message: 'Error adding score' });
    }
});

module.exports = router;