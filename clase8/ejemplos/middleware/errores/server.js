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

app.get('/ruta1', (req, res) => {
    console.log('ruta 1');
    res.send({});
});

app.get('/ruta2', middleware1, (req, res) => {
    try {
        console.log(variable);
        res.send({});
    } catch(err) {
        res.status(500).send('Something broke');
    }
});

app.use((err, req, res, next) => {
    console.log('entra por mdl de error');
    console.error(err.stack);
    res.status(500).send('Something broke');
});

app.listen(8080);