const express = require('express')
const exphbs = require('express-handlebars');
const session = require('express-session');

//Passport
const passport = require('passport');
const { Strategy: TwitterStrategy } = require('passport-twitter');

const TWITTER_CONSUMER_KEY = 'ZFZvAbafpqc3dHYKEC7XKvMEk';
const TWITTER_CONSUMER_SECRET = 'IDeL4qvsXbZPllSPwcegCr1fKyGf5OZZzVreqFVbjw9FEj6iPY';

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: '/auth/twitter/callback'
}, (token, tokenSecret, userProfile, done) => {
    console.log(userProfile);
    return done(null, userProfile);
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

const app = express();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    } else {
        res.redirect('/login')
    }
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/faillogin'
}));

app.get('/faillogin', (req, res) => {
    res.render('login-error', {});
});

/* --------- DATOS ---------- */
app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
        //reinicio contador
        if (!req.user.contador) req.user.contador = 0
        req.user.contador++
        res.render('datos', {
            nombre: req.user.displayName,
            username: req.user.username,
            foto: req.user.photos[0].value,
            contador: req.user.contador
        });
    } else {
        res.redirect('/login')
    }
});

app.get('/logout', (req, res) => {
    req.logout(err => {
        console.log(err);
    });
    res.redirect('/')
});

const server = app.listen(8080, () => {
    console.log('Server on');
})

server.on('error', error => console.log(error));