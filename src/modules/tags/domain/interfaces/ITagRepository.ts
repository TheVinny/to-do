import Tag from '@modules/tags/infra/model/TagModel';
import { ISaveTag } from './ICreateTag';
import { ITag } from './ITags';

export interface ITagRepository {
  findById(id: string): Promise<ITag | undefined>;
  findByTitle(title: string): Promise<ITag | undefined>;
  findByColor(color: string): Promise<ITag | undefined>;
  deleteById(tag: Tag): Promise<void>;
  save(tag: ISaveTag): Promise<ITag>;
  findAll(user_id: string): Promise<ITag[]>;
}
