import usersRouter from '@modules/users/infra/http/routes/userRoutes';
import { Router } from 'express';

const router: Router = Router();

router.use('/users', usersRouter);

export default router;
