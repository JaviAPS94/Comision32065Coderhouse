import { validarUsuario } from '../validaciones/index.js'
import { daoUsuarios } from '../daos/index.js'

export default class ApiUsuarios {
    constructor() {
        this.usuariosDao = daoUsuarios
    }

    async post(usuario) {
        const { result, error } = validarUsuario(usuario)
        if (result) {
            try {
                const nuevoUsuario = { ...usuario, id: generarId() }
                await this.usuariosDao.create(nuevoUsuario)
                console.log('Usuario incorporado')
                return nuevoUsuario
            } catch (error) {
                new Error(`error en escritura de usuario: ${error}`)
            }
        } else {
            throw new Error(error)
        }
    }

    async get(query = {}) {
        try {
            const usuarios = await this.usuariosDao.find(query)
            return usuarios
        } catch (error) {
            throw new Error(`error en lectura de usuarios: ${error}`)
        }
    }
}

function generarId(entityName = 'no_name') {
    return `${Date.now()}-${entityName}`
}