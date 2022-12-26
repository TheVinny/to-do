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
  ) {}

  async execute({ color, title }: ICreateTag): Promise<ITag> {
    const hasTag = await this.tagRepository.findByTitle(title);

    if (hasTag) throw new AppError('Name tag already exists', 409);

    const hasTagColor = await this.tagRepository.findByColor(color);

    if (hasTagColor) throw new AppError('Color tag has been used');

    const tagCreated = await this.tagRepository.save({
      color,
      title,
    });

    return tagCreated;
  }
}

export default CreateTagService;
