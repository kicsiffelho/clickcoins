const mongoose = require('mongoose');
const mongoURI = import.meta.env.VITE_MONGODB_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');
    const db = mongoose.connection.useDb('clickcoins_db');
    const Score = require('./tables/score.js');
})
.catch((err) => {
    console.error('Error conecting to MongoDB', err);
})
.finally(() => {
    mongoose.connection.close();
});

module.exports = mongoose;