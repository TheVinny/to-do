import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTag from '@modules/tags/services/CreateTag';

class CreateTagController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { title, color } = req.body;

    const createtag = container.resolve(CreateTag);

    const tag = await createtag.execute({
      color,
      title,
    });

    return res.status(201).json(tag);
  }
}

export default new CreateTagController();
