import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateTask } from '../domain/interfaces/ICreateTask';
import { ITaskRepository } from '../domain/interfaces/ITaskRepository';
import { ITasks } from '../domain/interfaces/ITasks';

@injectable()
class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ description, title, user_id }: ICreateTask): Promise<ITasks> {
    const user = await this.userRepository.findById(user_id);

    if (!user) throw new AppError('user not found', 404);

    const task = await this.taskRepository.save({
      title,
      description,
      user,
    });

    return task;
  }
}

export default CreateTaskService;
