import { Request, Response } from 'express';
import { container } from 'tsyringe';
import getAll from '@modules/tags/services/GetAll';

class getAllTagController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const getall = container.resolve(getAll);
    const tags = await getall.execute(id);
    return res.status(200).json(tags);
  }
}

export default new getAllTagController();
