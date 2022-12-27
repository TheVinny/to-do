import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IGetOne } from '../domain/interfaces/IGetOne';
import { ITagRepository } from '../domain/interfaces/ITagRepository';

@injectable()
class DeleteTagService {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,
  ) {}

  async execute({ id, tag_id }: IGetOne): Promise<void> {
    const hasTag = await this.tagRepository.findById(tag_id);

    if (!hasTag) throw new AppError('Tag not found', 404);

    if (hasTag.user.id !== id) {
      throw new AppError('Tag not found', 404);
    }

    await this.tagRepository.deleteById(hasTag);
  }
}

export default DeleteTagService;
