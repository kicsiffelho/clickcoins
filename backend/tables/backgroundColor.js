const mongoose = require('mongoose');

const backgroundColorSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    color: { type: String, required: true },
    timestamp: { type: Date, default: Date.now},
    owned: {type: Boolean, default: false}
});

const BackgroundColor = mongoose.model('BackgroundColor', backgroundColorSchema);
module.exports = BackgroundColor;