const express = require('express');
const operacionesAritmeticas = require('operacionesaritmeticaschap');

const app = express();

app.get('/suma', (req, res) => {
    return res.json({
        suma: operacionesAritmeticas.suma(Number(req.query.num1), Number(req.query.num2))
    })
});

app.listen(8082);