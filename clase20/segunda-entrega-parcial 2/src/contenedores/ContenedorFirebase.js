import admin from "firebase-admin"
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async listar(id) {
        
    }

    async listarAll() {
        
    }

    async guardar(nuevoElem) {
        
    }

    async actualizar(nuevoElem) {
        
    }

    async borrar(id) {
        
    }

    async borrarAll() {
        
    }

    async desconectar() {
    }
}

export default ContenedorFirebase