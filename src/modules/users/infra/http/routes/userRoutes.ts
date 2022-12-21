import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';

const usersRouter: Router = Router();

usersRouter.post('/', CreateUserController.execute);

export default usersRouter;
