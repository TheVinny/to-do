import AuthMiddleware from '@shared/infra/middlewares/AuthMiddleware';
import { Router } from 'express';
import CreateTask from '../controllers/CreateTask';
import GetAll from '../controllers/GetAll';
import RemoveTagTask from '../controllers/RemoveTagTask';
import ToggleTask from '../controllers/ToggleTask';

const taskRoute: Router = Router();

taskRoute.use(AuthMiddleware);
taskRoute.post('/', CreateTask.execute);
taskRoute.post('/tag', ToggleTask.execute);
taskRoute.get('/', GetAll.execute);
taskRoute.delete('/tag', RemoveTagTask.execute);

export default taskRoute;
