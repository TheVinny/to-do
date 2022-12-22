import AuthMiddleware from '@shared/infra/middlewares/AuthMiddleware';
import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';
import UpdateUserController from '../controllers/UpdateUserController';

const usersRouter: Router = Router();

usersRouter.post('/', CreateUserController.execute);
usersRouter.use(AuthMiddleware);
usersRouter.put('/', UpdateUserController.execute);

export default usersRouter;
