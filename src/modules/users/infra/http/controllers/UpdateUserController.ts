import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import UpdateUser from '@modules/users/services/UpdateUserService';

class UpdateUserController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { name, email, password, old_password } = req.body;
    const { id } = req.user;

    const createuser = container.resolve(UpdateUser);

    const user = await createuser.execute({
      password,
      name,
      email,
      id,
      old_password,
    });

    return res.json(instanceToInstance(user));
  }
}

export default new UpdateUserController();
