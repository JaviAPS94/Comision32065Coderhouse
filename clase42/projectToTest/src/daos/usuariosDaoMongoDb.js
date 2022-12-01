import mongoose from 'mongoose'
import { jsSchema as usuarioSchema } from '../modelos/usuario.js'
const Schema = mongoose.Schema

const usuariosDao = mongoose.model('Usuario', new Schema(usuarioSchema))

class DaoUsuarios {
    constructor() {
        return usuariosDao
    }
}

export default DaoUsuarios