const express = require('express');
const router = express.Router();
const { Score } = require('../db_connect');

router.post('/store-score', async (req, res) => {
    const { userId, score, username } = req.body;
    const newScore = new Score({ userId, score, username });
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

router.get('/highscore/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const highscore = await Score.findOne({ userId })
            .sort({score: -1})
            .limit(1);

        if (highscore) {
            res.json(highscore);
        }
        else {
            res.json({score:0});
        }
    }
    catch (error) {
        console.error('Error getting high score:', error);
    }
})

module.exports = router;