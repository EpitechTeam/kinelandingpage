const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

require('dotenv').config();

app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log(process.env.PORT);
app.listen(process.env.PORT);
