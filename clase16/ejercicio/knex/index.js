import { options } from './options/mysqlDB.js';
import knex from 'knex';

const knexConnection = knex(options);

(async () => {
    try {
        console.log('-------> Borro si existe la tabla')
        await knexConnection.schema.dropTableIfExists('articulos')

        console.log('-------> Creamos la tabla')
        await knexConnection.schema.createTable('articulos', table => {
            table.increments('id').primary();
            table.string('nombre', 15).notNullable();
            table.string('codigo', 10).notNullable();
            table.float('precio');
            table.integer('stock');
        });

        console.log('-------> Insertando registros')
        const articulos = [
            { nombre: 'Leche', codigo: 'AB-12', precio: 23.60, stock: 24 },
            { nombre: 'Harina', codigo: 'CD-34', precio: 12.80, stock: 45 },
            { nombre: 'DDL', codigo: 'EF-56', precio: 32.30, stock: 16 },
            { nombre: 'Fideos', codigo: 'FG-44', precio: 42.70, stock: 34 },
            { nombre: 'Crema', codigo: 'CR-77', precio: 67.90, stock: 24 }
        ];

        await knexConnection('articulos').insert(articulos);

        console.log('-------> Mostrando registros');
        const resultado = await knexConnection('articulos').select('*');
        console.log(resultado);

        console.log('-------> Borrando registro');
        await knexConnection.from('articulos').where('id', 3).del()

        console.log('-------> Actualizando registro');
        await knexConnection.from('articulos').where('id', 2).update({stock: 0});
    } catch (error) {
        console.log(error);
    } finally {
        knexConnection.destroy();
    }
})()