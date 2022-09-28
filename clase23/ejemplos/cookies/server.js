const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// app.use(cookieParser('secret'));
app.use(cookieParser(['secret', '1234', '678']));

//1era parte cookies sin tiempo de expiración
app.get('/set-cookie', (req, res) => {
    res.cookie('cookieap', 'seteoCookieNode');
    res.send('Set cookie ok');
});

app.get('/cookies', (req, res) => {
    res.json({ cookies: req.cookies, cookiesSigned: req.signedCookies });
});

app.get('/set-cookie-expiration', (req, res) => {
    res.cookie('cookieapex', 'seteoCookieNodeEx', { maxAge: 10000 });
    res.send('Set cookie ex ok');
});

app.get('/set-cookie-signed', (req, res) => {
    res.cookie('cookieapsigneddsfgsdfg', 'seteoCookieNodeSigned', { signed: true });
    res.send('Set cookie signed ok');
});


app.get('/clear', (req, res) => {
    for(const cookieName of Object.keys(req.signedCookies)) {
        res.clearCookie(cookieName);
    }
    res.send('Clear cookie ok');
});



app.listen(8080);