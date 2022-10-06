const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bCrypt = require('bcrypt');

//Passport
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

//Import módulos proyecto
const routes = require('./routes');
const config = require('./config');
const controllersdb = require('./controllersdb');
const User = require('./models');

passport.use('signup', new LocalStrategy({
    passReqToCallback: true
},
    (req, username, password, done) => {
        User.findOne({ 'username': username }, (err, user) => {
            if (err) {
                return done(err);
            };

            if (user) {
                return done(null, false);
            }

            const newUser = {
                username: username,
                password: createHash(password),
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            };

            User.create(newUser, (err, userWithId) => {
                if (err) {
                    return done(err);
                }
                return done(null, userWithId);
            })
        });
    }
));

passport.use('login', new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (!isValidPassword(user, password)) {
                return done(null, false);
            }

            return done(null, user);
        })
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

function isValidPassword(user, password) {
    return bCrypt.compareSync(password, user.password);
}

const app = express();

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: config.TIEMPO_EXPIRACION
    }
}));

app.use(passport.initialize());
app.use(passport.session());

//LOGIN
app.get('/login', routes.getLogin);
app.post('/login', passport.authenticate('login', {
    failureRedirect: '/faillogin'
}), routes.postLogin);
app.get('/faillogin', routes.getFailLogin);

//SIGNUP
app.get('/signup', routes.getSignUp);
app.post('/signup', passport.authenticate('signup', {
    failureRedirect: '/failsignup'
}), routes.postSignup);
app.get('/failsignup', routes.getFailsignup);

//Last part
function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
}

app.get('/ruta-protegida', checkAuthentication, (req, res) => {
    const { user } = req;
    console.log(user);
    res.send('<h1>Ruta OK!</h1>');
});

//LOGOUT
app.get('/logout', routes.getLogout);



// ------------------------------------------------------------------------------
//  LISTEN SERVER
// ------------------------------------------------------------------------------
controllersdb.conectarDB(config.URL_BASE_DE_DATOS, err => {

    if (err) return console.log('error en conexión de base de datos', err);
    console.log('BASE DE DATOS CONECTADA');

    app.listen(8081, (err) => {
        if (err) return console.log('error en listen server', err);
        console.log(`Server running on port 8081`);
    });
});