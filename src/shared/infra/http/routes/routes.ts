import AuthRoute from '@modules/auth/infra/http/routes/AuthRoute';
import usersRouter from '@modules/users/infra/http/routes/userRoutes';
import { Router } from 'express';

const router: Router = Router();

router.use('/users', usersRouter);
router.use('/auth', AuthRoute);

export default router;
