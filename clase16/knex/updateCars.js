import { options } from "./options/mysqlDB.js";
import knex from 'knex';

const knexConnection = knex(options);

knexConnection.from('cars').where('id', 1)
    .update({ price: 5000 })
    .then(() => console.log('Registro actualizado'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnection.destroy()
    });