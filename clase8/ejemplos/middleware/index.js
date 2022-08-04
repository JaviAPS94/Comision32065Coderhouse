const express = require('express')
const { Router } = express

const app = express()

function mdl1(req, res, next) {
    req.miAporte1 = 'dato por mdl1'
    if (req.rol === 'admin') {
        res.status(500).send('No autorizado');
    }
    next();
}

function mdl2(req, res, next) {
    req.miAporte2 = 'dato por mdl2'
    next();
}

const router = new Router();

router.get('/ruta1', mdl1, (req, res) => {
    let miAporte1 = req.miAporte1;
    res.send({miAporte1});
})

router.get('/ruta2', mdl1, mdl2, (req, res) => {
    let {miAporte1, miAporte2} = req;
    res.send({miAporte1, miAporte2});
})

app.use('/api', router);

app.listen(8080);