import AppError from '@shared/errors/AppError';
import { inject } from 'tsyringe';
import { ITagRepository } from '../domain/interfaces/ITagRepository';

class DeleteTagService {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const hasTag = await this.tagRepository.findById(id);

    if (!hasTag) throw new AppError('Tag not found', 404);

    await this.tagRepository.deleteById(hasTag);
  }
}

export default DeleteTagService;
