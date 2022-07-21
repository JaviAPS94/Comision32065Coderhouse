const fs = require('fs');

try {
    const fecha = new Date().toLocaleDateString();
    fs.writeFileSync('./fyh.txt', fecha)
} catch (error) {
    throw new Error('Error de escritura')
}

try {
    const data = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(data);   
} catch (error) {
    throw new Error('Error de lectura')
}