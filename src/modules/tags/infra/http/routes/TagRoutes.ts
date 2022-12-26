import { Router } from 'express';
import CreateTag from '../controllers/CreateTag';
import DeleteTag from '../controllers/DeleteTag';
import GetAll from '../controllers/GetAll';
import GetOne from '../controllers/GetOne';

const tagRouter: Router = Router();

tagRouter.post('/', CreateTag.execute);
tagRouter.delete('/', DeleteTag.execute);
tagRouter.get('/', GetAll.execute);
tagRouter.get('/:id', GetOne.execute);

export default tagRouter;
