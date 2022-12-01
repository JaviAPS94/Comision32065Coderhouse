const express = require('express');

const app = express();

app.use(express.json());

const numeros = [];

app.get('/', (req, res) => {
    res.send({ FyH: new Date().toISOString() })
});

app.post('/', (req, res) => {
    numeros.push(req.body);
    res.send(req.body);
});

app.get('/numbers', (req, res) => {
    res.send(numeros);
});

app.listen(8080);