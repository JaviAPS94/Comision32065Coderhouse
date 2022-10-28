const express = require('express');
const logger = require('pino')('./logs/info.log');
const expressPino = require('express-pino-logger')({
    logger: logger
});
const logrotate = require('logrotator');

const app = express();
app.use(expressPino);

//Log rotator
const rotator = logrotate.rotator;

// Revisamos la rotacion del archivo cada minuto, y rotamos el archivo en caso de que el tamaño exceda 1MB
// Vamos a almacenar 10 archivos de historico y ademas estos van a estar comprimidos.
rotator.register('./logs/info.log',
    {
        schedule: '1m',
        size: '1m',
        compress: true, count: 10
    });

rotator.on('error', (err) => {
    logger.error('oops, ha ocurrido un error');
});

rotator.on('rotate', (file) => {
    console.log(`archivo: ${file} fue rotado`);
    logger.info(`archivo: ${file} fue rotado`)
});

app.post('/product-category')

app.get('/products-category', (req, res) => {
    logger.info({
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
              "Radiation resistance",
              "Turning tiny",
              "Radiation blast"
            ]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
      }, 'Mensaje info');
    res.send('Log Ok');
});

app.listen(3001, () => {
    logger.info('Server running');
})






