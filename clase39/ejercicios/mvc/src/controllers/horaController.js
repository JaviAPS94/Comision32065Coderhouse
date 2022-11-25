import PrimeraConexion from "../singleton/PrimeraConexion.js";

async function getHora(req, res, next) {
    const primeraConexion = PrimeraConexion.getInstance();
    res.json({ hora: primeraConexion.obtenerHora() })
}

export {
    getHora
}