const faker = require('faker')
const fs = require('fs')

var str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

for (let i = 0; i < 100; i++) {
    str += faker.name.firstName() +
        ';' + faker.name.lastName() +
        ';' + faker.internet.email() +
        ';' + faker.name.jobTitle() +
        ';' + faker.random.locale() +
        '\n'
}

fs.writeFile('./test.csv', str, function (err) {
    if (err) console.log(err);
    console.log('archivo guardado')
})