const express = require('express');
const path = require('path');
const scoreRoute = require('./routes/scoreRoute');
const currencyRoute = require('./routes/currencyRoute');
const bgColorRoute = require('./routes/bgColorRoute');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use('/api', scoreRoute);
app.use('/api', currencyRoute);
app.use('/api', bgColorRoute);

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'reg.html'));
});

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'welcome.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'main.html'));
});

app.get('/score', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'score.html'));
});

app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'store.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
