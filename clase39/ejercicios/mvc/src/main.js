import express from 'express';
import handlebars from 'express-handlebars';
import router from './routes/routes.js';

const { engine } = handlebars;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs'
    })
);

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/', router);

app.listen(8080);