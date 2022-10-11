//require('dotenv').config();

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: process.env.MODO == 'prod' ?
        path.resolve(__dirname, 'prod.env') : path.resolve(__dirname, 'develop.env')
});

const fondo = process.env.FONDO;
const frente = process.env.FRENTE;

console.log({
    fondo,
    frente
});

