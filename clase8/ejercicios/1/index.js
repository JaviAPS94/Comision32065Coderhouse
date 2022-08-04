const express = require('express')
const { Router } = express

const app = express()

app.use(express.static('public'));

/* ------------------------------------------------------ */
/* Mascotas */

const routerMascotas = new Router()

routerMascotas.use(express.json())
routerMascotas.use(express.urlencoded({ extended: true }))

const mascotas = []

routerMascotas.get('/', (req, res) => {
    res.json(mascotas)
})

routerMascotas.post('/', (req, res) => {
    console.log('ingresa al post');
    mascotas.push(req.body)
    res.json(req.body)
})

/* ------------------------------------------------------ */
/* Personas */

const routerPersonas = new Router()

routerPersonas.use(express.json())
routerPersonas.use(express.urlencoded({ extended: true }))

const personas = []

routerPersonas.get('/', (req, res) => {
    res.json(personas)
})

routerPersonas.post('/', (req, res) => {
    console.log('ingresa al post');
    console.log(req.body);
    personas.push(req.body)
    res.json(req.body)
})

/* ------------------------------------------------------ */
/* Cargo los routers */

app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))