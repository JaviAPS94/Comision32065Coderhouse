const fs = require('fs');

// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

//fs.writeFileSync('./testWrite.txt', 'Esto es una prueba de escritura');

// fs.appendFileSync('./testWrite.txt', '\nEsto es una prueba de texto agregado');

// fs.unlinkSync('./testWrite.txt');

try {
    const data = fs.readFileSync('./adsadasd.txt', 'utf8');
} catch (error) {
    console.log('ingresa acá');
    console.error(error);
}
