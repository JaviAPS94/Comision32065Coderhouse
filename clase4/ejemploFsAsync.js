const fs = require('fs');

// fs.readFile('./test.txt', 'utf8', (error, contenido) => {
//     if (error) {
//         throw new Error('Error de lectura');
//     }
//     console.log('Lectura exitosa');
//     console.log(contenido);
// });

// fs.writeFile('./testWriteAsync.txt', 'texto de escritura', error => {
//     if (error) {
//         throw new Error('Error de escritura');
//     }
//     console.log('Escritura exitosa');
// });

// fs.mkdir('./carpetaNueva', error => {
//     if (error) {
//         throw new Error('Error de creación de directorio');
//     }
//     console.log('directorio creado');
// });

fs.readdir('./', (error, nombres) => {
    if (error) {
        throw new Error('Error de lectura de directorio');
    }
    console.log(nombres);
});






