import operaciones from 'operacionesaritmeticaschap';
import { getAll, guardar } from '../repositories/operationsDBRepository.js'

async function getSuma(num1, num2) {
    try {
        const sumaResult = await operaciones.suma(num1, num2);
        await guardarOperacion('SUMA', { num1, num2 }, sumaResult);
        return sumaResult;   
    } catch (error) {
        
    }
}

async function findOperation(operation) {
    try {
        const operation = await operaciones.find(operation);
        if (operation.length > 0) {
            return operation;
        } else {
            throw OperationNotFound();
        }
    } catch (error) {
        
    }
}

async function getResta(num1, num2) {
    const restaResult = await operaciones.resta(num1, num2);
    await guardarOperacion('RESTA', { num1, num2 }, restaResult);
    return restaResult;
}

async function getMultiplicacion(num1, num2) {
    const multiplicacionResult = await operaciones.multiplicacion(num1, num2);
    await guardarOperacion('MULTIPLICACION', { num1, num2 }, multiplicacionResult);
    return multiplicacionResult;
}

async function getDivision(num1, num2) {
    const divisionResult = await operaciones.division(num1, num2);
    await guardarOperacion('DIVISION', { num1, num2 }, divisionResult);
    return divisionResult;
}

async function getOperations() {
    const operationsResult = await getAll();
    return operationsResult;
}

async function guardarOperacion(tipo, parametros, resultado) {
    const dato = {
        tipo,
        parametros,
        resultado
    };
    dato.timestamp = Date.now();
    await guardar(dato);
    return dato;
}

export {
    getSuma,
    getResta,
    getMultiplicacion,
    getDivision,
    getOperations
}