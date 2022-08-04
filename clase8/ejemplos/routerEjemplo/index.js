const express = require('express');
const { Router } = express;

const app = express();

const routerUsuarios = new Router();

router.get('/recurso', (req, res) => {
    res.send('get ok');
});

router.post('/recurso', (req, res) => {
    res.send('post ok');
});

app.use('/api', router);

app.listen(8080);

