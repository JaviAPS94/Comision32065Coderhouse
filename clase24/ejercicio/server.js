const express = require('express');
const session = require('express-session');

//Redis
const redis = require('redis');
const client = redis.createClient(15765, 'redis-15765.c82.us-east-1-2.ec2.cloud.redislabs.com');

client.auth('twmAkYOdIKQDgI5VyooVGJrv92nGhDcB', (err) => {
    if (err) throw err;
});

const RedisStore = require('connect-redis')(session);

const app = express();

app.use(session({
    store: new RedisStore({
        client: client,
        ttl: 30
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

const getNombreSession = req => req.session.nombre ? req.session.nombre : '';

app.get('/', (req, res) => {
    if(req.session.contador) {
        //Colocar lógica de usuario para mostrar el nombre y el número de visitas
        req.session.contador++;
        res.send(`${getNombreSession(req)} visitaste la página ${req.session.contador} veces.`)
    } else {
        //Inicializar variables de sesion
        let { nombre } = req.query;
        req.session.nombre = nombre;
        req.session.contador = 1;
        res.send(`Te damos la bienvenida ${getNombreSession(req)}`);
    }
})


app.listen(8080);
console.log('server on');