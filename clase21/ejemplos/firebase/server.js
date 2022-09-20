const admin = require('firebase-admin');

const serviceAccount = require('./db/apcoderhouse32065-firebase-adminsdk-9ign5-95e9a1eccf.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://apcoderhouse32065.firebaseio.com'
});

console.log('Base de datos conectada');

CRUD();

async function CRUD() {
    const db = admin.firestore();
    const query = db.collection('usuarios');

    //CREATE
    // try {
    //     let id = 1;
    //     let doc = query.doc(`${id}`);
    //     await doc.create({ nombre: 'Alex', dni: 1234567 });

    //     id++;
    //     doc = query.doc(`${id}`);
    //     await doc.create({ nombre: 'Matias', dni: 546456 });

    //     id++;
    //     doc = query.doc(`${id}`);
    //     await doc.create({ nombre: 'Alejandro', dni: 345634 });

    // } catch (error) {
    //     console.log(error);
    // }

    //READ
    try {
        // const querySnapshot = await query.get();
        // let docs = querySnapshot.docs;

        // const response = docs.map((doc) => ({
        //     id: doc.id,
        //     nombre: doc.data().nombre,
        //     dni: doc.data().dni
        // }));

        // console.log(response);
        const usuarios = [{
            name: 'Alex',
            dni: 12345,
            pwd: 342134,
        },
        {
            nombre: 'Alex',
            dni: 12345,
        },
        {
            nombre: 'Alex',
            dni: 12345,
        }]
        
        ProductService
        assertEquals(usuarios, Product.getProductos())

    } catch (error) {
        console.log(error);
    }
    //READ BY ID
    try {
        let id = 1;
        const doc = query.doc(`${id}`);
        const item = await doc.get();
        const response = item.data();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    //UPDATE
    try {
        let id = 2;
        const doc = query.doc(`${id}`);
        let item = await doc.update({ dni: 123 })
        console.log(item);
    } catch (error) {
        console.log(error);
    }

    //DELETE
    try {
        let id = 1;
        const doc = query.doc(`${id}`);
        let item = await doc.delete();
        console.log(item);
    } catch (error) {
        console.log(error);
    }
}
