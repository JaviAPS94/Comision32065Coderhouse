import { Router } from 'express'
import { createNFakeProducts } from '../../mocks/productos.js'

const productosApiRouter = new Router()

productosApiRouter.get('/api/productos-test', (req, res) => { res.json(createNFakeProducts(5)) })

export default productosApiRouter