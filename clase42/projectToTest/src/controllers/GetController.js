

import ApiUsuarios from '../api/usuarios.js'

export default class GetController {
    constructor() {
        this.api = new ApiUsuarios()
    }

    async execute(req, res) {
        try {
            const result = await this.api.get(req.params.id)
            res.json(result)
        } catch (error) {
            res.send(error)
        }
    }
}