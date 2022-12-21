import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUser from '@modules/users/services/CreateUserService';

class CreateUserController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { name, email, password, repeatPassword } = req.body;

    const createuser = container.resolve(CreateUser);

    const user = await createuser.execute({
      password,
      name,
      email,
      repeatPassword,
    });

    return res.json(user);
  }
}

export default new CreateUserController();
