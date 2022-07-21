const fs = require('fs');

fs.readFile('package.json', 'utf-8', (error, contenido) => {
    if (error) {
        throw new Error('Error en lectura');
    }

    console.log('Lectura exitosa');

    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: contenido.length
    };

    console.log(info);

    fs.writeFile('info.txt', JSON.stringify(info, null, 2), error => {
        if (error) {
            throw new Error('Error en escritura');
        }
        console.log('Escritura exitosa');
    })
})