import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteTag from '@modules/tags/services/DeleteTag';

class DeleteTagController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletetag = container.resolve(DeleteTag);

    await deletetag.execute(id);

    return res.status(204).json();
  }
}

export default new DeleteTagController();
