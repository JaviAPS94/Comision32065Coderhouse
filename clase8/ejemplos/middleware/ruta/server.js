const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

function middleware1(req, res, next) {
    if(req.query.rol == 'admin') {
        next();
    } else {
        res.status(403).send('No puedes acceder');
    }
}

function middleware2(req, res, next) {
    req.miAporteMdl2 = 'dato asignado por mdl2';
    next();
}

app.get('/ruta1', middleware1, (req, res) => {
    console.log('ruta 1');
    res.send({});
});

app.get('/ruta2', middleware1, middleware2, (req, res) => {
    console.log('ruta 2');
    res.send({});
});

app.listen(8080);