const express = require('express');
const router = express.Router();
const { BackgroundColor } = require('../db_connect');

router.post('/background-color', async (req, res) => {
    const { userId, color } = req.body;
    try {
        const newBackgroundColor = new BackgroundColor({userId, color});
        await newBackgroundColor.save();
        res.json({message: 'Background color saved successfully'});
    }
    catch (error) {
        console.error('Error saving background color:', error);
        res.status(500).json({ error: 'Server error while saving background color' });
    }
});

router.get('/background-color/:userId', async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }
    try {
        const backgroundColor = await BackgroundColor.findOne({userId: userId}).sort({timestamp: -1});
        if (backgroundColor) {
            return res.json({ color: backgroundColor.color });
        }
        else {
            return res.json({ color: '#7c5cc4' });
        }
    }
    catch (error) {
        console.error('Error fetching background color:', error);
        res.status(500).json({ error: 'Server error while fetching background color' });
    }
});

module.exports = router;