const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.get('/ruta1', (req, res) => {
    console.log('ruta 1');
    res.send({});
});

app.get('/ruta2', (req, res) => {
    console.log('ruta 2');
    res.send({});
});

app.listen(8080);