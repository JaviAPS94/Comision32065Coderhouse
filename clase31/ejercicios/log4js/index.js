const express = require('express');
const logger = require('./logger');

const app = express();

app.get('/sumar', (req, res) => {
    const { n1, n2 } = req.query;
    if (!isNaN(n1) && !isNaN(n2)) {
        logger.info(`Parámetros ${n1} y ${n2} correctos para la suma`);
        res.send(`La suma es ${Number(n1) + Number(n2)}`);
    } else {
        logger.error('Parámetros incorrectos para la suma');
        res.send('Parámetros incorrectos para la suma');
    }
});

app.get('*', (req, res) => {
    logger.warn('Ruta no implementada');
    res.send('Ruta no implementada');
});

app.listen(8081, (error) => {
    if (error) {
        logger.error('Fail server');
    }
    logger.info('Server running');
});