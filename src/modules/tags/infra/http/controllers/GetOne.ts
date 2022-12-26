import { Request, Response } from 'express';
import { container } from 'tsyringe';
import getOne from '@modules/tags/services/GetOne';

class GetOneController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getone = container.resolve(getOne);

    const tag = await getone.execute(id);

    return res.status(200).json(tag);
  }
}

export default new GetOneController();
