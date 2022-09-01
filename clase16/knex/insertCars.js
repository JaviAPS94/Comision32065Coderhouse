import { options } from "./options/mysqlDB.js";
import knex from 'knex';

const knexConnection = knex(options);

const cars = [
    { name: 'Audi', price: 123123 },
    { name: 'Mercedes', price: 234234234 },
    { name: 'Volkswagen', price: 2344 },
    { name: 'Mazda', price: 23424324 },
    { name: 'Ferrari', price: 234234243 },
];

knexConnection('cars').insert(cars)
    .then(() => console.log('datos insertados'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnection.destroy()
    });