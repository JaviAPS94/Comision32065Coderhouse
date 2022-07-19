//Funcion normal
const mostrar = function (params) {
    console.log(params);
};

// mostrar('Hola mundo');

//Funcion flecha
const mostrarFlecha = (param1, param2) => {
    console.log(`${param1} ${param2}`);
};

// mostrarFlecha('hola','mundo');

//Funcion recibe un solo parametro
const funcionUnSoloParametro = param => {
    console.log(param);
};

// funcionUnSoloParametro(90);

//Funcion una sola linea de ejecucion
const funcionUnaSolaLineaEjecucion = (num1, num2) => (num1 * num2);


console.log(funcionUnaSolaLineaEjecucion(3, 4));




