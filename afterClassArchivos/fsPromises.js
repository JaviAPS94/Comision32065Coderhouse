const fs = require('fs');

fs.promises.readFile('./info.txt', 'utf-8')
    .then(contenido => {
        const info = JSON.parse(contenido);
        console.log(info);
        const packageJsonObject = info.contenidoObj;
        packageJsonObject.author = 'Coderhouse';

        fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonObject, null, 2))
            .then(() => console.log('escritura exitosa'))
            .catch(error => {
                console.error(error);
            })
    })
    .catch(error => {
        console.error(error);
    })