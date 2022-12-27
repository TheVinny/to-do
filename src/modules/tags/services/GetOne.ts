import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IGetOne } from '../domain/interfaces/IGetOne';
import { ITagRepository } from '../domain/interfaces/ITagRepository';
import { ITag } from '../domain/interfaces/ITags';

@injectable()
class getOneService {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,
  ) {}

  async execute({ tag_id, id }: IGetOne): Promise<ITag> {
    const hasTag = await this.tagRepository.findById(tag_id);

    if (!hasTag) throw new AppError('Tag not found', 404);

    if (hasTag.user.id !== id) {
      throw new AppError('Tag not found', 404);
    }

    return hasTag;
  }
}

export default getOneService;
