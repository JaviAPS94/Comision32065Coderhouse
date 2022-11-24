import minimist from 'minimist';
import ProductosApi from './api/ProductosApi.js';

const productosApi = new ProductosApi();

async function ejecutarCmds() {
  const argv = minimist(process.argv.slice(2));
  const {
    cmd, id, nombre, precio, stock,
  } = argv;
  try {
    switch (cmd.toLowerCase()) {
      case 'buscar':
        // node scripts.js --cmd buscar --id 1
        console.log(cmd);
        console.log(await productosApi.buscar(id));
        break;
      case 'agregar':
        // node scripts.js --cmd Agregar --nombre TV --precio 12.34 --stock 99
        console.log(cmd);
        console.log(await productosApi.agregar({ nombre, precio, stock }));
        break;
      case 'reemplazar':
        console.log(cmd);
        console.log(await productosApi.buscar(id, { nombre, precio, stock }));
        break;
      case 'borrar':
        console.log(cmd);
        console.log(await productosApi.borrar(id));
        break;
      case 'cotizacion':
        // node scripts.js --cmd cotizacion --id 1
        console.log(cmd);
        console.log(await productosApi.buscarConCotizacionEnDolares(id));
        break;
      default:
        console.log('comando no valido');
    }
  } catch (error) {
    console.log(error);
  }

  // productosApi.exit();
}

ejecutarCmds();

// node minimist.js --cmd Agregar --nombre TV --precio 12.34 --stock 99
