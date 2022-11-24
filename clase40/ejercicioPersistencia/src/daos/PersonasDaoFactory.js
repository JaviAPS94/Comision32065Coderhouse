import PersonasDaoFile from "./PersonasDaoFile.js";
import PersonasDaoMem from "./PersonasDaoMem.js";
import PersonasDaoDb from "./PersonasDaoDb.js";

const rutaArchivoPersonas = './personas.txt';
const cnxStr = 'mongodb://localhost/test';

const option = process.argv[2] || 'Mem';

let dao

switch (option) {
    case 'Mongo':
        dao = new PersonasDaoDb(cnxStr);
        await dao.init();
        break;
    case 'File':
        dao = new PersonasDaoFile(rutaArchivoPersonas);
        await dao.init();
        break;
    default:
        dao = new PersonasDaoMem();
}

export default class PersonasDaoFactory {
    static getDao() {
        return dao;
    }
}