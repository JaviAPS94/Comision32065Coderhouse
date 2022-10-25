const express = require('express');

const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    console.log('test');
    res.send(`Servidor en puerto update ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`);
});

app.listen(PORT, err => {
    if(!err) console.log(`Servidor escuchando en puerto ${PORT} - PID ${process.pid}`);
});
