import AuthMiddleware from '@shared/infra/middlewares/AuthMiddleware';
import { Router } from 'express';
import CreateTask from '../controllers/CreateTask';

const taskRoute: Router = Router();

taskRoute.use(AuthMiddleware);
taskRoute.post('/', CreateTask.execute);

export default taskRoute;
