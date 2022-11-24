import { Router } from 'express';
import {
    postPersonController, getPersonController, postDataOnWire, getDataOnWire, getDataJson
} from '../controllers/personController.js';

const router = new Router();

router.post('/html-onwire', postPersonController);
router.get('/html-onwire', getPersonController);

//DATA on Wire API REST
router.post('/data-onwire', postDataOnWire);
router.get('/data-onwire', getDataOnWire);
router.get('/data-json', getDataJson);

export default router;