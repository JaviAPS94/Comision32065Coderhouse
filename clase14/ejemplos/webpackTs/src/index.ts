import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";

const app = express();

const persona: Persona = new Persona("Coder", "House");

app.get('/', (req, res) => {
    res.send({
        time: getTime(),
        name: persona.getFullName()
    });
})

const PORT: number = 8080;

app.listen(PORT, () => {
    console.log('server running');
})