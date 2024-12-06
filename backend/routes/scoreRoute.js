const express = require('express');
const router = express.Router();
const { Score } = require('../db_connect');

router.post('/store-score', async (req, res) => {
    const { userId, score } = req.body;
    const newScore = new Score({ userId, score });
    try {
        await newScore.save();
        console.log('Score added');
        res.json({ message: 'Score added successfully' });
    }
    catch (error) {
        console.error('Error adding score:', error);
        res.status(500).json({ error: 'Server error while adding score' });
    }
});

router.get('/scores', async(req, res) => {
    try {
        const score = await Score.find().sort({ score: -1 }).limit(10);
        if (score) {
            res.json(score);
        }
        else {
            res.status(404).json({ message: 'Score not found for this user' });
        }
    }
    catch (error) {
        console.error('Error getting user currency:', error);
        res.status(500).json({ error: 'Server error while getting score' });
    }
});

module.exports = router;