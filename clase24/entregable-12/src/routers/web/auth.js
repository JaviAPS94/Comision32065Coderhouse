import { Router } from 'express'

import path from 'path'

const authWebRouter = new Router()

authWebRouter.get('/', (req, res) => {
    
})

authWebRouter.get('/login', (req, res) => {
    
})

authWebRouter.get('/logout', (req, res) => {
    
})


authWebRouter.post('/login', (req, res) => {
    req.session.nombre = req.body.nombre;
    res.redirect('/home');
})



export default authWebRouter