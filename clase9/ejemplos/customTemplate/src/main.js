const express = require('express');
const { promises: fs } = require('fs');

const app = express();

app.engine('ntl', async(filePath, options, callback) => {
    try {
        const content = await fs.readFile(filePath);
        const rendered = content.toString().replace('#title#', '' + options.title + '')
            .replace('#message#', '' + options.message + '');
        return callback(null, rendered);
    } catch (error) {
        return callback(new Error(error));
    }
});

app.set('views', './views');

app.set('view engine', 'ntl');

app.get('/', (req, res) => {
    const datos = {
        title: 'Custom template',
        message: 'Custom template message'
    };

    res.render('index', datos);
});

app.listen(8080);

