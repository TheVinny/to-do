import AuthMiddleware from '@shared/infra/middlewares/AuthMiddleware';
import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';
import GetUserByIdController from '../controllers/GetUserByIdController';
import UpdateUserController from '../controllers/UpdateUserController';

const usersRouter: Router = Router();

usersRouter.post('/', CreateUserController.execute);
usersRouter.use(AuthMiddleware);
usersRouter.put('/', UpdateUserController.execute);
usersRouter.get('/', GetUserByIdController.execute);

export default usersRouter;
