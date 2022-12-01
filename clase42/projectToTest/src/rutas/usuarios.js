import { Router } from 'express'
import { getController, postController } from '../controllers/index.js'

const router = Router()

router.post('/', (req, res) => postController.execute(req, res))
router.get('/:id?', (req, res) => getController.execute(req, res))

class RouterUsuarios {
    constructor() {
        return router
    }
}

export default RouterUsuarios