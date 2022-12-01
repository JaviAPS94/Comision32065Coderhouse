import ApiUsuarios from '../api/usuarios.js'

export default class PostController {
    constructor() {
        this.api = new ApiUsuarios()
    }

    async execute(req, res) {
        try {
            const result = await this.api.post(req.body)
            res.json(result)
        } catch (error) {
            res.send(error)
        }
    }
}