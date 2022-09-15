import ContenedorSQL from "../../contenedores/ContenedorSQL.js"
import config from '../../config.js'

class ProductosDaoMariaDb extends ContenedorSQL {

    constructor() {
        super(config.mariaDb, 'productos')
    }
}

export default ProductosDaoMariaDb
