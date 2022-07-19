// const ejecutar = unaFuncion => unaFuncion();
// ejecutar(() => console.log('saludos'));

// const ejecutar = (unaFuncion, param) => unaFuncion(param);

// const saludar = nombre => console.log(`saludos, ${nombre}`);

// ejecutar(saludar, 'alex');

function escribirYLoguear(texto, callbackParaLoguear) {
    //simulacion de escribir un archivo
    console.log(texto);
    //cuando finalice, ejecutamos el callback
    callbackParaLoguear('archivo proceso con éxito');
}

escribirYLoguear('Hola estoy usando callbacks', (mensajeParaLoguear) => {
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensajeParaLoguear}`)
});



