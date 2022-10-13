console.log('Directorio actual: ' + process.cwd());
console.log('Id del proceso: ' + process.pid);
console.log('Version Node: ' + process.version);
console.log('Titulo del proceso: ' + process.title);
console.log('Sistema operativo: ' + process.platform);
console.log('Memoria: ' + process.memoryUsage().rss);

function sumar() {
    return 4 + 5;
}

process.on('uncaughtException', (err) => {
    //Implemetar lógica de escritura en logs
    console.log('Excepcion tomada: ' + err);
});

suma();

// process.on('beforeExit', (code) => {
//    //Colocar lógica de escritura de logs
//    console.log('');
// })

// process.on('exit', (code) => {
//     console.log(code);
// });

// process.exit(5);
// process.exit(4);

// console.log('Fin ejecucion');