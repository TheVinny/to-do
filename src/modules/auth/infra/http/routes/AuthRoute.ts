import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const AuthRoute: Router = Router();

AuthRoute.post('/', AuthController.execute);

export default AuthRoute;
