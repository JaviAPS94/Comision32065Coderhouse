import { promises as fs } from 'fs'
import config from '../config.js'

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = `${config.fileSystem.path}/${ruta}`;
    }

    async listar(id) {
        
    }

    async listarAll() {
        
    }

    async guardar(obj) {
        
    }

    async actualizar(elem) {
        
    }

    async borrar(id) {
        
    }

    async borrarAll() {
        
    }
}


export default ContenedorArchivo