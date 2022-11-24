export default class Cotizador {
    static VALOR_DOLAR = 100;
    getPrecioSegunMoneda(precio, moneda) {
        switch(moneda) {
            case 'USD':
                return precio * Cotizador.VALOR_DOLAR;
            default:
                return precio;
        }
    }
}