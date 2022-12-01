import express from 'express'

import RouterUsuarios from './rutas/usuarios.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/usuarios', new RouterUsuarios())

export default app