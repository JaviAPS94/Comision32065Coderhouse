import mongoose from 'mongoose';
import supertest from 'supertest';
import { expect } from 'chai';
import app from '../src/server.js';
import { generar } from './generador/usuarios.js';

let request
let server

describe('test api rest full', () => {
    before(async function () {
        await connectDb();
        server = await startServer();
        request = supertest(`http://localhost:${server.address().port}/api/usuarios`);
    });

    after(function () {
        mongoose.disconnect();
        server.close();
    });

    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            const response = await request.get('/')
            expect(response.status).to.eq(200);
        })
    });

    describe('POST', () => {
        it('debeería incoporar un usario', async () => {
            const usuario = generar();

            const response = await request.post('/').send(usuario);
            expect(response.status).to.eq(200);

            const user = response.body;
            expect(user).to.include.keys('nombre', 'email');
            expect(user.nombre).to.eq(usuario.nombre);
            expect(user.email).to.eq(usuario.email);
        })
    })
});

async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost/mibasetest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Base de datos conectada!');
    } catch (error) {
        throw new Error(`Error de conexión en la base de datos: ${err}`)
    }
}

async function startServer() {
    return new Promise((resolve, reject) => {
        const PORT = 0
        const server = app.listen(PORT, () => {
            console.log(`Servidor express escuchando en el puerto ${server.address().port}`);
            resolve(server)
        });
        server.on('error', error => {
            console.log(`Error en Servidor: ${error}`)
            reject(error)
        });
    })
}