class ContenedorMemoria {

    constructor() {
        this.elementos = []
    }

    listar(id) {
        const elem = this.elementos.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    listarAll() {
        return [...this.elementos]
    }

    guardar(elem) {

        let newId
        if (this.elementos.length == 0) {
            newId = 1
        } else {
            newId = this.elementos[this.elementos.length - 1].id + 1
        }

        const newElem = { ...elem, id: newId }
        this.elementos.push(newElem)
        return newElem
    }

    actualizar(elem) {
        const newElem = { ...elem, id: Number(elem.id) }
        const index = this.elementos.findIndex(p => p.id == elem.id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            this.elementos[index] = newElem
            return newElem
        }
    }

    borrar(id) {
        const index = this.elementos.findIndex(elem => elem.id == id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            return this.elementos.splice(index, 1)
        }
    }

    borrarAll() {
        this.elementos = []
    }
}

export default ContenedorMemoria
