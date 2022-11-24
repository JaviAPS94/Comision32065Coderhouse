import path from 'path';
import { guardar, getAll } from '../models/personModel.js';

const __dirname = path.resolve();

async function postPersonController(req, res, next) {
    await guardar(req.body);
    res.redirect('/html-onwire');
}

async function getPersonController(req, res, next) {
    const people = await getAll();
    res.render('plantilla-html-onwire', { personas: people });
}

//API REST Data On Wire

async function postDataOnWire(req, res, next) {
    const persona = await guardar(req.body);
    res.json(persona);
}

async function getDataOnWire(req, res, next) {
    res.sendFile(`${__dirname}/src/views/plantilla-data-onwire.html`)
}

async function getDataJson(req, res, next) {
    const people = await getAll();
    res.json({ personas: people });
}

export {
    postPersonController,
    getPersonController,
    postDataOnWire,
    getDataOnWire,
    getDataJson
}