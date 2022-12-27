import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTask from '@modules/tasks/services/CreateTaskService';

class CreateTaskController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const { id } = req.user;

    const createtask = container.resolve(CreateTask);

    const task = await createtask.execute({
      description,
      title,
      user_id: id,
    });

    return res.status(201).json(task);
  }
}

export default new CreateTaskController();
