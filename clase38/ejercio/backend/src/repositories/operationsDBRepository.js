import { MongoClient } from 'mongodb';
import config from '../config.js';

const uri = config.mongodb.cnxStr;
const options = config.mongodb.options;
const client = new MongoClient(uri, options);
await client.connect();

const collection = client.db('coderhouse').collection('operations');

async function getAll() {
    let docs = await collection.find({}, { _id:0, __v: 0 }).toArray();
    return docs;
}

async function guardar(operacion) {
    let doc = await collection.insertOne(operacion);
    return doc;
}

export {
    getAll,
    guardar
}