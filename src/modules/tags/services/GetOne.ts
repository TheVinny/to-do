import AppError from '@shared/errors/AppError';
import { inject } from 'tsyringe';
import { ITagRepository } from '../domain/interfaces/ITagRepository';
import { ITag } from '../domain/interfaces/ITags';

class getOneService {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,
  ) {}

  async execute(id: string): Promise<ITag> {
    const hasTag = await this.tagRepository.findById(id);

    if (!hasTag) throw new AppError('Tag not found', 404);

    return hasTag;
  }
}

export default getOneService;
