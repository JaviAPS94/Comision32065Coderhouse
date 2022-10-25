const numCpu = require('os').cpus().length
const http = require('http');
const cluster = require('cluster');

//Parte master, creacion de subprocesos
if(cluster.isMaster) {
    console.log(`PID MASTER ${process.pid}`);

    for (let i = 0; i < numCpu; i++) {
        cluster.fork();
    };

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Work ${worker.process.pid} died`);
        cluster.fork();
    });
} else { //Parte subprocesos, logica de la aplicación
    http.createServer((req, res) => {
        res.end('Hola mundo');
    }).listen(8081);
    console.log(`Worker ${process.pid} started`);
}