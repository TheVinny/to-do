import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { instanceToInstance } from 'class-transformer';
import AuthService from '@modules/auth/service/AuthService';

class AuthController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createuser = container.resolve(AuthService);

    const user = await createuser.execute({
      password,
      email,
    });

    return res.json(instanceToInstance(user));
  }
}

export default new AuthController();
