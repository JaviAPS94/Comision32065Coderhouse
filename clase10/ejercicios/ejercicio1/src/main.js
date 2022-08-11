const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    const params = req.query;
    res.render('nivel', params);
});

app.listen(8080);