import express from 'express';
import PointController from './controllers/PointController';
import ItemController from './controllers/ItemController';

const routes = express.Router();
const pointController = new PointController();
const itemController = new ItemController();

routes.get('/items', itemController.index);
routes.post('/points', pointController.create);
routes.get('/points/:id', pointController.show);
routes.get('/points', pointController.index);
export default routes;