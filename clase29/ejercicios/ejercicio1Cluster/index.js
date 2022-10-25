const express = require('express');
const numCpu = require('os').cpus().length
const cluster = require('cluster');

if(cluster.isMaster) {
    console.log(numCpu);
    console.log(`PID MASTER ${process.pid}`);

    for (let i = 0; i < numCpu; i++) {
        cluster.fork();
    };

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Work ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    const app = express();
    const PORT = parseInt(process.argv[2]) || 8080;

    app.get('/', (req, res) => {
        res.send(`Servidor en puerto ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`);
    });
    
    app.listen(PORT, err => {
        if(!err) console.log(`Servidor escuchando en puerto ${PORT} - PID ${process.pid}`);
    });
}
