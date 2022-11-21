import {
    getSuma,
    getResta,
    getMultiplicacion,
    getDivision,
    getOperations
} from '../services/operationsService.js'

async function getSumaController(req, res) {
    const sumaResult = await getSuma(Number(req.query.num1), Number(req.query.num2));
    res.json(sumaResult);
}

async function getRestaController(req, res) {
    const restaResult = await getResta(Number(req.query.num1), Number(req.query.num2));
    res.json(restaResult);
}

async function getMultiplicacionController(req, res) {
    const multiplicacionResult = await getMultiplicacion(Number(req.query.num1), Number(req.query.num2));
    res.json(multiplicacionResult);
}

async function getDivisionController(req, res) {
    const divisionResult = await getDivision(Number(req.query.num1), Number(req.query.num2));
    res.json(divisionResult);
}

async function getOperationsController(req, res) {
    const operationsResult = await getOperations();
    res.json(operationsResult);
}

export {
    getSumaController,
    getRestaController,
    getMultiplicacionController,
    getDivisionController,
    getOperationsController
}




