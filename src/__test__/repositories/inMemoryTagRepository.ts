import Tag from '@modules/tags/infra/model/TagModel';
import { ITagRepository } from '@modules/tags/domain/interfaces/ITagRepository';
import { ITag } from '@modules/tags/domain/interfaces/ITags';

export default class TagRepositoryMemory implements ITagRepository {
  private tags: Tag[] = [
    {
      color: '',
      title: 'lazer',
      id: '',
    },
  ];

  async findById(id: string): Promise<ITag | undefined> {
    const tags = this.tags.find(tags => {
      tags.id = id;
    });

    return tags;
  }
  async save(tag: ITag): Promise<ITag> {
    const saveTag = {
      ...tag,
      id: '',
    };

    this.tags.push(saveTag);

    return saveTag;
  }
  async deleteById(tag: Tag): Promise<void> {
    const index = this.tags.indexOf(tag);

    this.tags.splice(index, 1);
  }
}
