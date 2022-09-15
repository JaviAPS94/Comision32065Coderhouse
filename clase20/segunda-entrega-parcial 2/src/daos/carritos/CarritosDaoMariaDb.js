import CarritosDaoSQL from "./CarritosDaoSQL.js"
import config from '../../config.js'

class CarritosDaoMariaDb extends CarritosDaoSQL {

    constructor() {
        super(config.mariaDb, config.mariaDb)
    }
}

export default CarritosDaoMariaDb
