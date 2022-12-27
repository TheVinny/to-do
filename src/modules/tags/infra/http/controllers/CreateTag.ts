import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTag from '@modules/tags/services/CreateTag';
import { instanceToInstance } from 'class-transformer';

class CreateTagController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { title, color } = req.body;
    const { id } = req.user;

    const createtag = container.resolve(CreateTag);
    const tag = await createtag.execute({
      color,
      title,
      user_id: id,
    });

    return res
      .status(201)
      .json(instanceToInstance(tag, { excludePrefixes: ['user'] }));
  }
}

export default new CreateTagController();
