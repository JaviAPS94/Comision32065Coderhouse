const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/mensajes', (req, res) => {
    console.log('HTTP GET');
    //obtener todos los mensajes
    res.json({ msg: 'Hola mundo' });
});

//query params opcionales
app.get('/api/mensajes-query-params', (req, res) => {
    console.log('GET con query params');
    if (Object.entries(req.query).length > 0) {
        res.json({
            result: 'get with query params: ok',
            query: req.query.edad
        })
    } else {
        res.json({
            result: 'get all: ok'
        })
    }
});

//path params
app.get('/api/mensajes/:id', (req, res) => {
    res.json({
        result: 'recurso buscado',
        pathParam: req.params.id
    })
});

app.post('/api/mensajes', (req, res) => {
    console.log(req.body);
});

app.listen(8080);