import ProductosDao from '../daos/ProductosDao.js';
import Cotizador from '../utils/Cotizador.js';
import ProductoDto from '../dto/ProductoDto.js';

class ProductosApi {
  constructor() {
    this.productosDao = new ProductosDao();
    this.cotizador = new Cotizador();
  }

  async agregar(prod) {
    const prodAgregado = await this.productosDao.add(prod);

    return prodAgregado;
  }

  async buscar(id) {
    let productos;
    if (id) {
      productos = await this.productosDao.getById(id);
    } else {
      productos = await this.productosDao.getAll();
    }

    return productos;
  }

  async borrar(id) {
    if (id) {
      await this.productosDao.deleteById(id);
    } else {
      await this.productosDao.deleteAll();
    }
  }

  async reemplazar(id, prodToUpdate) {
    const prodUpdated = await this.productosDao.updateById(id, prodToUpdate);

    return prodUpdated;
  }

  async buscarConCotizacionEnDolares(id) {
    if (id) {
      const producto = await this.productosDao.getById(id);
      const cotizaciones = {
        precioDolar: this.cotizador.getPrecioSegunMoneda(producto.precio, 'USD'),
      };
      const productoDto = new ProductoDto(producto, cotizaciones);

      return productoDto;
    }
    const productos = await this.productosDao.getAll(id);
    const productosDto = productos.map((producto) => {
      const cotizaciones = {
        precioDolar: this.cotizador.getPrecioSegunMoneda(producto.precio, 'USD'),
      };
      const productoDto = new ProductoDto(producto, cotizaciones);

      return productoDto;
    });

    return productosDto;
  }

  exit() {
    this.productosDao.exit();
  }
}

export default ProductosApi;
