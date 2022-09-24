import express, { json } from 'express';
import UsuariosRouter from './router/usuarios.js';

const app = express();

app.use(json());

app.use('/api/usuarios', new UsuariosRouter());

app.listen(8081);