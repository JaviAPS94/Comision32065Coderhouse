import { options } from "./options/mysqlDB.js";
import knex from 'knex';

const knexConnection = knex(options);

knexConnection.schema.createTable('cars', table => {
    table.increments('id')
    table.string('name')
    table.integer('price')
})
    .then(() => console.log('tabla creada'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnection.destroy()
    });