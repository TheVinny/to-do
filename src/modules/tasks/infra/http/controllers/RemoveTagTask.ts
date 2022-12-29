import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RemoveTag from '@modules/tasks/services/RemoveTagService';

class RemoveTagTaskController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { tags, task_id } = req.body;
    const { id } = req.user;

    const removetask = container.resolve(RemoveTag);

    await removetask.execute({
      id,
      tags,
      task_id,
    });

    return res.status(204).json();
  }
}

export default new RemoveTagTaskController();
