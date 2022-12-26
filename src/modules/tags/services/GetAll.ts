import { inject } from 'tsyringe';
import { ITagRepository } from '../domain/interfaces/ITagRepository';
import { ITag } from '../domain/interfaces/ITags';

class getAllService {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,
  ) {}

  async execute(): Promise<ITag[]> {
    const tags = await this.tagRepository.findAll();

    return tags;
  }
}

export default getAllService;
