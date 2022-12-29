import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import ToggleTask from '@modules/tasks/services/ToggleTagService';

class ToggleTaskController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { tags, task_id } = req.body;
    const { id } = req.user;

    const toggletask = container.resolve(ToggleTask);

    const tasktagged = await toggletask.execute({
      id,
      tags,
      task_id,
    });

    return res.status(201).json(instanceToInstance(tasktagged));
  }
}

export default new ToggleTaskController();
