const http = require('http');

const getMensaje = () => {
    const horaActual = new Date().getHours();

    if (horaActual >= 6 && horaActual <= 12) {
        return ('Buenos dias');
    } else if (horaActual >= 13 && horaActual <= 19) {
        return ('buenas tardes');
    } else {
        return ('Buenas Noches');
    }
}

const server = http.createServer((peticion, respuesta) => {
    respuesta.end(getMensaje());
});

const connectedServer = server.listen(8080, () => {
    console.log(`Server http escuchando en el puerto ${connectedServer.address().port}`);
})