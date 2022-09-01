import knex from 'knex'
import config from '../src/config.js'

//------------------------------------------
// productos en MariaDb

try {
    const mariaDbClient = knex(config.mariaDb)

    //Implementar creación de tabla

    console.log('tabla productos en mariaDb creada con éxito')
} catch (error) {
    console.log('error al crear tabla productos en mariaDb')
    console.log(error)
}

//------------------------------------------
// mensajes en SQLite3
try {
    const sqliteClient = knex(config.sqlite3)

    //Implementar creación de tabla

    console.log('tabla mensajes en sqlite3 creada con éxito')
} catch (error) {
    console.log('error al crear tabla mensajes en sqlite3')
}