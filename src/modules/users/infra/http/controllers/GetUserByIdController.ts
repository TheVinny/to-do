import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import GetByIdUser from '@modules/users/services/GetUserByIdService';

class GetUserByIdController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const createuser = container.resolve(GetByIdUser);

    const user = await createuser.execute(id);

    return res.json(instanceToInstance(user));
  }
}

export default new GetUserByIdController();
