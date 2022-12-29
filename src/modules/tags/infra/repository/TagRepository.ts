import Tag from '../model/TagModel';
import { ITag } from '@modules/tags/domain/interfaces/ITags';
import { EntityRepository, getRepository, In, Repository } from 'typeorm';
import { ITagRepository } from '@modules/tags/domain/interfaces/ITagRepository';
import { ISaveTag } from '@modules/tags/domain/interfaces/ICreateTag';
import {
  IFindTagByColor,
  IFindTagById,
  IFindTagByTitle,
  IFindTags,
} from '@modules/tags/domain/interfaces/IFindTags';

@EntityRepository(Tag)
export default class TagRepository implements ITagRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async findByTitle({
    title,
    user,
  }: IFindTagByTitle): Promise<ITag | undefined> {
    const tag = await this.repository.findOne({
      where: {
        title,
        user,
      },
    });

    return tag;
  }

  async findByColor({
    color,
    user,
  }: IFindTagByColor): Promise<ITag | undefined> {
    const tag = await this.repository.findOne({
      where: {
        color,
        user,
      },
    });
    return tag;
  }

  async findById({ id, user }: IFindTagById): Promise<ITag | undefined> {
    const tags = await this.repository.findOne({
      where: { id, user },
      relations: ['user'],
    });

    return tags;
  }

  async findAll(user_id: string): Promise<ITag[]> {
    const tags = await this.repository.find({
      where: {
        user: user_id,
      },
    });

    return tags;
  }

  async findAllById(tags: IFindTags[]): Promise<ITag[]> {
    const tagsId = tags.map(tag => tag.id);

    const existsTags = await this.repository.find({
      where: {
        id: In(tagsId),
      },
    });

    return existsTags;
  }

  async save(tag: ISaveTag): Promise<ITag> {
    const saveUser = this.repository.create(tag);
    return await this.repository.save(saveUser);
  }
  async deleteById(tag: ITag): Promise<void> {
    await this.repository.remove(tag);
  }
}
