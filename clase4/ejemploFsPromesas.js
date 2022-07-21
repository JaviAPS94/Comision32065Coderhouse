const fs = require('fs');

async function readFile() {
    try {
        const contenido = await fs.promises.writeFile('./test.txt', 'utf-8');
        console.log(contenido);
    } catch (error) {
        console.error(error);
    }
}

readFile();