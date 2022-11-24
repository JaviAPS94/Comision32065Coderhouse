import Config from "./config.js";
import DbClient from "./DbClient.js";
import CustomError from "./errores/CustomError.js";

class MyMongoClient extends DbClient {
    constructor() {
        super();
        this.connected = false;
        this.client = mongoose;
    }

    async connect() {
        try {
            await this.client.connect(Config.db.cnxStr+Config.db.name, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
            console.log('Base de datos conectada');
        } catch (error) {
            throw new CustomError(500, 'error al conectarse a mongodb', error);
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close();
            console.log('Base de datos desconectada');
            this.connect = false;
        } catch (error) {
            throw new CustomError(500, 'error al conectarse a mongodb', error);
        }
    }
}

export default MyMongoClient;