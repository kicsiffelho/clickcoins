const mongoose = require('mongoose');

const backgroundColorSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    colors: { type: String, default: [] },
    timestamp: { type: Date, default: Date.now}
});

const BackgroundColor = mongoose.model('BackgroundColor', backgroundColorSchema);
module.exports = BackgroundColor;