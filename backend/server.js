const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'reg.html'));
});

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'welcome.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'game.html'));
});

app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'store.html'));
});

app.get('/score', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'score.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
