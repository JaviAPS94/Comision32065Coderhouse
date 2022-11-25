let instance = null;

export default class PrimeraConexion {
  constructor() {
    this.value = new Date().toLocaleTimeString();
  }

  obtenerHora() {
    return this.value;
  }

  static getInstance() {
    if (!instance) {
      instance = new PrimeraConexion();
    }

    return instance;
  }
}