const array = []// -> [number, number, number, string, boolean];

process.on('exit', (code) => {
    console.log(code);
});

function getResult(array) {
    const types = array.map(element => typeof(element));

    if (array.length === 0) {
        console.log(emptyError());
        process.exit(-4);
    }

    if (!validateDataType(types)) {
        console.log(dataTypeError(array, types));
        process.exit(-5);
    }

    return {
        datos: {
            numeros: array,
            promedio: promedio(array),
            max: Math.max(...array),
            min: Math.min(...array),
            ejecutable: process.execPath,
            pid: process.pid,
        }
    }   
}

function promedio(array) {
    const suma = array.reduce((previous, current) => current += previous);
    const avg = suma / array.length;
    return avg;
}

function emptyError() {
    return {
        error: {
            descripcion: 'entrada vacía',
        }
    }
}

function dataTypeError(array, types) {
    return {
        error: {
            descripcion: 'error de tipo',
            numeros: array,
            tipos: types,
        }
    }
}

function validateDataType(types) {
    for (const type of types) {
        if(type !== 'number') {
            return false;
        }
    }

    return true;
}

console.log(getResult(array));