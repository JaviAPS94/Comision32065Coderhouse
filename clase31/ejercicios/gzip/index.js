const express = require('express');
const compression = require('compression');

const app = express();

const message = 'Hola que tal';
const largeMessage = message.repeat(1000);

app.get('/saludo', (req, res) => {
    res.send(largeMessage);
});

app.get('/saludo-zip', compression(), (req, res) => {
    res.send(largeMessage);
});

app.listen(8081);

//12.0 kB transferred
//375 B transferred