const express = require('express');
const router = express.Router();
const { Score } = require('../db_connect');

router.post('/store-score', async (req, res) => {
    const { userId, score } = req.body;
    const newScore = new Score({ userId, score });
    try {
        await newScore.save();
        console.log('Score added');
    }
    catch (error) {
        console.error('Error adding score:', error);
    }
});

module.exports = router;