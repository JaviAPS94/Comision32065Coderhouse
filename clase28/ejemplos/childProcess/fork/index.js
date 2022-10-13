const http = require('http');
const { fork } = require('child_process');

let visitas = 0;

const server = http.createServer();

const calculo = () => {
    let suma = 0;
    for (let i = 0; i < 6e9; i++) {
        suma += i;
    }
    return suma;
};

server.on('request', (req, res) => {
    let { url } = req;
    if (url === '/calcular') {
        //Manera incorrecta
        // res.end(`La suma es ${calculo()}`);
        //Manera correcta
        const computo = fork('computo.js');
        computo.send('start');
        computo.on('message', suma => {
            res.end(`La suma es ${suma}`);
        })
    }
    else if (url === '/') {
        res.end(`Ok ${++visitas}`);
    }
});

server.listen(8081, err => {
    if (err) throw new Error('Error en el servidor');
    console.log('Server running');
})