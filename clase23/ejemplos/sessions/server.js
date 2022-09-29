const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));


app.get('/login', (req, res) => {
    const { username, password } = req.query;

    if (username !== 'alex' || password !== 'alexpass') {
        return res.send('Login failed');
    }

    req.session.user = username;
    req.session.admin = true;
    res.send('Login sucess!!');
});

function auth(req, res, next) {
    if (req.session?.user === 'alex' && req.session?.admin) {
        return next();
    }
    return res.status(401).send('error de autorización');
}

app.get('/private', auth, (req, res) => {
    res.send('Si estas viendo esto es porque ya te logueaste');
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            res.json({ status: 'Logout Error', body: err })
        } else {
            res.send('Logout ok!!')
        }
    })
})

app.listen(8080);