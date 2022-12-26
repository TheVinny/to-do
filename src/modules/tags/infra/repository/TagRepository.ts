import Tag from '../model/TagModel';
import { ITag } from '@modules/tags/domain/interfaces/ITags';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { ITagRepository } from '@modules/tags/domain/interfaces/ITagRepository';
import { ICreateTag } from '@modules/tags/domain/interfaces/ICreateTag';

@EntityRepository(Tag)
export default class TagRepository implements ITagRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async findByTitle(title: string): Promise<ITag | undefined> {
    const tag = await this.repository.findOne({
      where: {
        title,
      },
    });

    return tag;
  }

  async findById(id: string): Promise<ITag | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async findAll(): Promise<ITag[]> {
    const tags = await this.repository.find();

    return tags;
  }

  async save(tag: ICreateTag): Promise<ITag> {
    const saveUser = this.repository.create(tag);

    return await this.repository.save(saveUser);
  }
  async deleteById(tag: ITag): Promise<void> {
    await this.repository.remove(tag);
  }
}
