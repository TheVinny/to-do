import { ITagRepository } from '@modules/tags/domain/interfaces/ITagRepository';
import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITagInsert } from '../domain/interfaces/IInsertTag';
import { ITaskRepository } from '../domain/interfaces/ITaskRepository';

@injectable()
class ToggleTagService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('TagRepository')
    private tagRepository: ITagRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ task_id, tags, id }: ITagInsert): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new AppError('user not found', 404);

    const existsTags = await this.tagRepository.findAllById(tags);

    if (!existsTags.length) {
      throw new AppError('Could not find any tags with the given ids.');
    }
    const task = await this.taskRepository.findById(task_id, user);

    if (!task) {
      throw new AppError('task not found', 404);
    }

    const taskTagged = await this.taskRepository.insertTag({
      tags: existsTags,
      task,
      user,
    });

    return taskTagged;
  }
}

export default ToggleTagService;
