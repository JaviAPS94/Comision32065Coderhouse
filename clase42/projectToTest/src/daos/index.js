import DaoUsuariosMongoDb from './usuariosDaoMongoDb.js';
import DaoUsuariosMem from './usuariosDaoMem.js';

const persistencia = process.env.PERSISTENCIA || 'MEM'

let daoUsuarios
switch (persistencia) {
    case 'MONGO':
        daoUsuarios = new DaoUsuariosMongoDb()
        break
    default:
        daoUsuarios = new DaoUsuariosMem()
}

export { daoUsuarios }