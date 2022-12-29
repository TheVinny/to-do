import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IGetOne } from '../domain/interfaces/IGetOne';
import { ITagRepository } from '../domain/interfaces/ITagRepository';

@injectable()
class DeleteTagService {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ id, tag_id }: IGetOne): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new AppError('User not found', 404);

    const hasTag = await this.tagRepository.findById({
      id: tag_id,
      user,
    });

    if (!hasTag) throw new AppError('Tag not found', 404);

    await this.tagRepository.deleteById(hasTag);
  }
}

export default DeleteTagService;
