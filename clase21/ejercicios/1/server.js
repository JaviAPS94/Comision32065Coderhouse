import express from 'express';
import faker from 'faker';
faker.locale = 'es'

const app = express();

// const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
// const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];

// function getRandomElement(array) {
//     return array[Math.floor(array.length * Math.random())];
// }

// function crearCombinacionesAlAlzar() {
//     return {
//         nombre: getRandomElement(nombres),
//         apellido: getRandomElement(apellidos),
//         color: getRandomElement(colores)
//     }
// }

function crearCombinacionesAlAlzar() {
    return {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.commerce.color()
    }
}

app.get('/test', (req, res) => {
    const objs = [];
    for (let i = 0; i < 10; i++) {
        objs.push(crearCombinacionesAlAlzar());
    }
    res.json(objs);
});

app.listen(8080);