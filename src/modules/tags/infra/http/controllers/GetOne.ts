import { Request, Response } from 'express';
import { container } from 'tsyringe';
import getOne from '@modules/tags/services/GetOne';
import { instanceToInstance } from 'class-transformer';
class GetOneController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { tag_id } = req.params;
    const { id } = req.user;
    const getone = container.resolve(getOne);

    const tag = await getone.execute({ id, tag_id });

    return res
      .status(200)
      .json(instanceToInstance(tag, { excludePrefixes: ['user'] }));
  }
}

export default new GetOneController();
