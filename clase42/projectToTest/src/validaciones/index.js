import Joi from '@hapi/joi'

function validarSchema(objeto, schema) {
    const validador = Joi.object(schema)
    const { error } = validador.validate(objeto)
    if (error) {
        return { result: false, error }
    } else {
        return { result: true }
    }
}

const usuarioSchema = {
    id: Joi.string(),
    nombre: Joi.string().required(),
    email: Joi.string().email().required()
}

export function validarUsuario(usuario) {
    return validarSchema(usuario, usuarioSchema)
}