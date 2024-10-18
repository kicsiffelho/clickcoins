const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true, default: 0 },
});

const Currency = mongoose.model('Currency', currencySchema);
module.exports = Currency;