const mongoose = require('mongoose');

const currencyTransactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['earn', 'spend'], required: true },
    Timestamp: { type: Date, default: Date.now }
});

const currencyTransaction = mongoose.model('CurrencyTransaction', currencyTransactionSchema);
module.exports = currencyTransaction;