import knex from 'knex'

class ContenedorSQL {

    constructor(config, tabla) {
        this.knex = knex(config)
        this.tabla = tabla
    }

    async listar(id) {

    }

    async listarAll(criterio = {}) {
 
    }

    async guardar(elem) {

    }

    async actualizar(elem) {
 
    }

    async borrar(id) {

    }

    async borrarAll(criterio = {}) {

    }
}

export default ContenedorSQL