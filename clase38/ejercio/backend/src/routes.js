import { Router } from 'express';
import {
    getSumaController,
    getRestaController,
    getMultiplicacionController,
    getDivisionController,
    getOperationsController
} from './controllers/operationsController.js';

import auth from './middleware/auth.js';

const operationsRouter = new Router();

operationsRouter.get('/suma', getSumaController);
operationsRouter.get('/resta', getRestaController);
operationsRouter.get('/multiplicacion', getMultiplicacionController);
operationsRouter.get('/division', getDivisionController);
operationsRouter.get('/', auth, getOperationsController);

export default operationsRouter;