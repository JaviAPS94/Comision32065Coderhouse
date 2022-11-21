const operaciones = [];

async function getAll() {
    return operaciones;
}

async function guardar(operacion) {
    operaciones.push(operacion);
    return operacion;
}

export {
    getAll,
    guardar
}