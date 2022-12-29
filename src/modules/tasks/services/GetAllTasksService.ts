import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITaskRepository } from '../domain/interfaces/ITaskRepository';
import { ITasks } from '../domain/interfaces/ITasks';

@injectable()
class GetAllTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(user_id: string): Promise<ITasks[]> {
    const user = await this.userRepository.findById(user_id);

    if (!user) throw new AppError('User not found', 404);

    const tasks = await this.taskRepository.findAll(user);

    return tasks;
  }
}

export default GetAllTaskService;
