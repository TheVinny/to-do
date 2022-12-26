import { Request, Response } from 'express';
import { container } from 'tsyringe';
import getAll from '@modules/tags/services/GetAll';

class getAllTagController {
  async execute(_req: Request, res: Response): Promise<Response> {
    const getall = container.resolve(getAll);
    const tags = await getall.execute();
    return res.status(200).json(tags);
  }
}

export default new getAllTagController();
