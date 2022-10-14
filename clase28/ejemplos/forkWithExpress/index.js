const express = require('express');
const { fork } = require('child_process');

const app = express();

function sumar() {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;
    }
    return suma;
}

let contador = 0;

app.get('/', (req, res) => {
    res.json({ contador: ++contador });
});

app.get('/calculo-bloq', (req, res) => {
    res.json({ suma: sumar() });
});

app.get('/calculo-nobloq', (req, res) => {
    const computo = fork('sumaFork.js');
    computo.send('start');
    computo.on('message', suma => {
        res.end(`La suma es ${suma}`);
    })
});

app.listen(8081, () => {
    console.log('Server running')
})