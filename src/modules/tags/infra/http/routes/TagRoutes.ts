import AuthMiddleware from '@shared/infra/middlewares/AuthMiddleware';
import { Router } from 'express';
import CreateTag from '../controllers/CreateTag';
import DeleteTag from '../controllers/DeleteTag';
import GetAll from '../controllers/GetAll';
import GetOne from '../controllers/GetOne';

const tagRouter: Router = Router();

tagRouter.use(AuthMiddleware);
tagRouter.post('/', CreateTag.execute);
tagRouter.delete('/:tag_id', DeleteTag.execute);
tagRouter.get('/', GetAll.execute);
tagRouter.get('/:tag_id', GetOne.execute);

export default tagRouter;
