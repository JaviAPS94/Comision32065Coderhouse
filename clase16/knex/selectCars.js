import { options } from "./options/mysqlDB.js";
import knex from 'knex';

const knexConnection = knex(options);

knexConnection.from('cars').select('*')
    .where('price', '>', '5000')
    .orderBy('price', 'desc')
    .then((rows) => {
        for(let row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`)
        }
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnection.destroy()
    });