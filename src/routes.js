import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddlewares from './app/middlewares/auth';
import adminMiddlewares from './app/middlewares/admin';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.get('/recipients', adminMiddlewares, RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', adminMiddlewares, RecipientController.store);
routes.put('/recipients/:id', adminMiddlewares, RecipientController.update);
routes.delete('/recipients/:id', adminMiddlewares, RecipientController.destroy);

export default routes;
