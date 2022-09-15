const productosApi = {
    get: () => {
        return fetch('/api/productos')
            .then(data => data.json())
    }
}

const carritosApi = {
    crearCarrito: () => {
        const options = { method: "POST" }
        return fetch('/api/carritos', options)
            .then(data => data.json())
    },
    getIds: () => {
        return fetch('/api/carritos')
            .then(data => data.json())
    },
    postProd: (idCarrito, idProd) => {
        const data = { id: idProd }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        return fetch(`/api/carritos/${idCarrito}/productos`, options)
    },
    getProds: idCarrito => {
        return fetch(`/api/carritos/${idCarrito}/productos`)
            .then(data => data.json())
    },
    deleteProd: (idCarrito, idProducto) => {
        const options = {
            method: 'DELETE',
        }
        return fetch(`/api/carritos/${idCarrito}/productos/${idProducto}`, options)
    }
}

loadComboProductos()

loadComboCarrito()

document.getElementById('btnAgregarAlCarrito').addEventListener('click', () => {
    const idCarrito = document.getElementById('comboCarritos').value
    const idProd = document.getElementById('comboProductos').value
    if (idCarrito && idProd) {
        agregarAlCarrito(idCarrito, idProd)
    } else {
        alert('debe seleccionar un carrito y un producto')
    }
})

document.getElementById('btnCrearCarrito').addEventListener('click', () => {
    carritosApi.crearCarrito()
        .then(({ id }) => {
            loadComboCarrito().then(() => {
                const combo = document.getElementById('comboCarritos')
                combo.value = `${id}`
                combo.dispatchEvent(new Event('change'));
            })
        })
})

document.getElementById('comboCarritos').addEventListener('change', () => {
    const idCarrito = document.getElementById('comboCarritos').value
    actualizarListaCarrito(idCarrito)
})

function agregarAlCarrito(idCarrito, idProducto) {
    return carritosApi.postProd(idCarrito, idProducto).then(() => {
        actualizarListaCarrito(idCarrito)
    })
}

function quitarDelCarrito(idProducto) {
    const idCarrito = document.getElementById('comboCarritos').value
    return carritosApi.deleteProd(idCarrito, idProducto).then(() => {
        actualizarListaCarrito(idCarrito)
    })
}

function actualizarListaCarrito(idCarrito) {
    return carritosApi.getProds(idCarrito)
        .then(prods => makeHtmlTable(prods))
        .then(html => {
            document.getElementById('carrito').innerHTML = html
        })
}

function makeHtmlTable(productos) {
    let html = `
        <style>
            .table td,
            .table th {
                vertical-align: middle;
            }
        </style>`

    if (productos.length > 0) {
        html += `
        <h2>Lista de Productos</h2>
        <div class="table-responsive">
            <table class="table table-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Foto</th>
                </tr>`
        for (const prod of productos) {
            html += `
                    <tr>
                    <td>${prod.title}</td>
                    <td>$${prod.price}</td>
                    <td><img width="50" src=${prod.thumbnail} alt="not found"></td>
                    <td><a type="button" onclick="quitarDelCarrito('${prod.id}')">borrar</a></td>
                    </tr>`
        }
        html += `
            </table>
        </div >`
    } else {
        html += `<br><h4>carrito sin productos</h2>`
    }
    return Promise.resolve(html)
}

function crearOpcionInicial(leyenda) {
    const defaultItem = document.createElement("option")
    defaultItem.value = ''
    defaultItem.text = leyenda
    defaultItem.hidden = true
    defaultItem.disabled = true
    defaultItem.selected = true
    return defaultItem
}

function loadComboProductos() {
    return productosApi.get()
        .then(productos => {
            const combo = document.getElementById('comboProductos');
            combo.appendChild(crearOpcionInicial('elija un producto'))
            for (const prod of productos) {
                const comboItem = document.createElement("option");
                comboItem.value = prod.id;
                comboItem.text = prod.title;
                combo.appendChild(comboItem);
            }
        })
}

function vaciarCombo(combo) {
    while (combo.childElementCount > 0) {
        combo.remove(0)
    }
}

function loadComboCarrito() {
    return carritosApi.getIds()
        .then(ids => {
            const combo = document.getElementById('comboCarritos');
            vaciarCombo(combo)
            combo.appendChild(crearOpcionInicial('elija un carrito'))
            for (const id of ids) {
                const comboItem = document.createElement("option");
                comboItem.value = id;
                comboItem.text = id;
                combo.appendChild(comboItem);
            }
        })
}
