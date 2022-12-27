import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteTag from '@modules/tags/services/DeleteTag';

class DeleteTagController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { tag_id } = req.params;
    const { id } = req.user;
    const deletetag = container.resolve(DeleteTag);

    await deletetag.execute({ id, tag_id });

    return res.status(204).json();
  }
}

export default new DeleteTagController();
