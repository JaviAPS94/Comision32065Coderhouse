import express from 'express';
import operationsRouter from './routes.js';

const app = express();
app.use(express.json());

app.use('/api/operations', operationsRouter);

const PORT = 8081;

const server = app.listen(PORT, () => {
    console.log('UP')
});

server.on('error', error => console.error('Error en el servidor'));