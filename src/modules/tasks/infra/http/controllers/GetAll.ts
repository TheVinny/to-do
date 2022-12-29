import { Request, Response } from 'express';
import { container } from 'tsyringe';
import getAll from '@modules/tasks/services/GetAllTasksService';
import { instanceToInstance } from 'class-transformer';

class getAllTaskController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const getall = container.resolve(getAll);
    const tasks = await getall.execute(id);
    return res
      .status(200)
      .json(instanceToInstance(tasks, { excludePrefixes: ['user'] }));
  }
}

export default new getAllTaskController();
