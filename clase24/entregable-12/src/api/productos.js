import config from '../config.js'

import ContenedorArchivo from '../contenedores/ContenedorArchivo.js'

const productosApi = new ContenedorArchivo(`${config.fileSystem.path}/productos.json`)

export default productosApi