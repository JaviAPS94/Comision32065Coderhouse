export default class DaoUsuariosMem {
    constructor() {
        this.usuarios = []
    }

    static #matches(query, usuario) {
        for (const [ k, v ] of Object.entries(query)) {
            if (usuario[ k ] != v) return false
        }
        return true
    }

    find(query) {
        return this.usuarios.filter(u => DaoUsuariosMem.#matches(query, u))
    }

    create(usuario) {
        this.usuarios.push(usuario)
    }
}