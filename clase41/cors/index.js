const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'https://example.com',
    methods: 'GET, POST, PUT'
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hola mundo'
    })
});

app.get('/test', (req, res) => {
    res.json({
        message: 'Hola mundo'
    })
});


app.listen(8080);