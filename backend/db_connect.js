require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');s
})
.catch((err) => {
    console.error('Error conecting to MongoDB', err);
});

const Score = require('./tables/score.js');
const Currency = require('./tables/currency.js');
const CurrencyTransaction = require('./tables/currencyTransaction.js');
const BackgroundColor = require('./tables/backgroundColor.js');

module.exports = { mongoose, Score, Currency, CurrencyTransaction, BackgroundColor };