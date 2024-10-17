const express = require('express');
const router = express.Router();
const { Currency, CurrencyTransaction } = require('../db_connect');

router.post('/currency-transaction', async (req, res) => {
    console.log('Request body: ', req.body);
    const { userId, amount, type } = req.body;
    try {
        const newTransaction = new CurrencyTransaction({ userId, amount, type });
        await newTransaction.save();

        let userCurrency = await Currency.findOne({ userId });
        if (userCurrency) {
            userCurrency.amount += (type === 'earn' ? amount: -amount);
            await userCurrency.save();
        }
        else {
            const newCurrency = new Currency({
                userId,
                amount: type === 'earn' ? amount: -amount
            });
            await newCurrency.save();
        }
        res.json({ message: 'Transaction recorded and currency updated successfully' });
    }
    catch (error) {
        console.error('Error handling transaction:', error);
        res.status(500).json({ error: 'Server error while processing transaction' });
    }
});

router.get('/currency/:userId', async(req, res) => {
    const { userId } = req.params;
    try {
        const currency = await Currency.findOne({ userId });
        if (currency) {
            res.json(currency);
        }
        else {
            res.status(404).json({ message: 'Currency not found for this user' });
        }
    }
    catch (error) {
        console.error('Error getting user currency:', error);
    }
});

module.exports = router;