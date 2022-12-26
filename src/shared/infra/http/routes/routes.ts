import AuthRoute from '@modules/auth/infra/http/routes/AuthRoute';
import TagRouter from '@modules/tags/infra/http/routes/TagRoutes';
import usersRouter from '@modules/users/infra/http/routes/userRoutes';
import { Router } from 'express';

const router: Router = Router();

router.use('/users', usersRouter);
router.use('/auth', AuthRoute);
router.use('/tag', TagRouter);

export default router;
