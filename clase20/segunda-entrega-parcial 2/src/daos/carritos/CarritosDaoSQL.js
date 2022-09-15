import ContenedorSQL from "../../contenedores/ContenedorSQL.js"

class CarritosDaoSQL {

    constructor(configCarritos, configProds) {
        this.carritos = new ContenedorSQL(configCarritos, 'carritos')
        this.prodsEnCarritos = new ContenedorSQL(configProds, 'prodsEnCarritos')
    }

    async guardar(carrito = {}) {
        const result = await this.carritos.guardar(carrito)
        result.productos = []
        return result
    }

    async listar(_idCarrito) {
        const idCarrito = Number(_idCarrito)
        await this.carritos.listar(idCarrito)
        const result = {
            id: idCarrito,
            productos: []
        }
        const prodsEnCarritos = await this.prodsEnCarritos.listarAll({ idCarrito })
        for (const prod of prodsEnCarritos) {
            delete prod.idCarrito
            result.productos.push(prod)
        }
        return result
    }

    async actualizar(carrito) {
        carrito.id = Number(carrito.id)
        await this.prodsEnCarritos.borrarAll({ idCarrito: carrito.id })
        const inserts = carrito.productos.map(p => {
            return this.prodsEnCarritos.guardar({
                ...p,
                idCarrito: carrito.id
            })
        })
        return Promise.allSettled(inserts)
    }

    async borrar(_idCarrito) {
        const idCarrito = Number(_idCarrito)
        const result = await Promise.allSettled([
            this.prodsEnCarritos.borrarAll({ idCarrito }),
            this.carritos.borrar(idCarrito)
        ])
        return result
    }

    borrarAll() {
        return Promise.allSettled([
            this.carritos.borrarAll(),
            this.prodsEnCarritos.borrarAll()
        ])
    }

    async listarAll() {
        const carritosIds = await this.carritos.listarAll()
        const carritosMap = new Map()
        for (const obj of carritosIds) {
            carritosMap.set(obj.id, {
                id: obj.id,
                productos: []
            })
        }
        const prodsEnCarritos = await this.prodsEnCarritos.listarAll()
        for (const prod of prodsEnCarritos) {
            if (carritosMap.has(prod.idCarrito)) {
                carritosMap.get(prod.idCarrito).productos.push(prod)
            }
        }
        return [...carritosMap.values()]
    }
}

export default CarritosDaoSQL
