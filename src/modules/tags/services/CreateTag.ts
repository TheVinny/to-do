import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateTag } from '../domain/interfaces/ICreateTag';
import { ITagRepository } from '../domain/interfaces/ITagRepository';
import { ITag } from '../domain/interfaces/ITags';

@injectable()
class CreateTagService {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ color, title, user_id }: ICreateTag): Promise<ITag> {
    const user = await this.userRepository.findById(user_id);

    if (!user) throw new AppError('User not found, not authorized', 401);

    const hasTag = await this.tagRepository.findByTitle(title);

    if (hasTag) throw new AppError('Name tag already exists', 409);

    const hasTagColor = await this.tagRepository.findByColor(color);

    if (hasTagColor) throw new AppError('Color tag has been used');

    const tagCreated = await this.tagRepository.save({
      color,
      title,
      user,
    });

    return tagCreated;
  }
}

export default CreateTagService;
