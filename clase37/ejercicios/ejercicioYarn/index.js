import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.json('Hola yarn');
});

app.listen(8081);