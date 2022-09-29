const express = require('express');
const session = require('express-session');

//Mongo Local
const MongoStore = require('connect-mongo');

const app = express();
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(session({
    store: MongoStore.create({ 
        mongoUrl: 'mongodb+srv://alexpinaida32065:UAQ9ypxaDap1MlBr@cluster0.jabskja.mongodb.net/sesiones?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10000
    }
}));

app.get('/', (req,res) => {
    res.send('Servidor express ok!')
})

app.get('/con-session', (req,res) => {
    if(req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1
        res.send('Bienvenido!')
    }
});

app.get('/logout', (req,res) => {
    req.session.destroy( err => {
        if(!err) res.send('Logout ok!')
        else res.send({status: 'Logout ERROR', body: err})
    })
});

app.listen(8080);
console.log('server on');