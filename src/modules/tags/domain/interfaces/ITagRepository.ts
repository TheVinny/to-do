import Tag from '@modules/tags/infra/model/TagModel';
import { ICreateTag } from './ICreateTag';
import { ITag } from './ITags';

export interface ITagRepository {
  findById(id: string): Promise<ITag | undefined>;
  findByTitle(title: string): Promise<ITag | undefined>;
  deleteById(tag: Tag): Promise<void>;
  save(tag: ICreateTag): Promise<ITag>;
  findAll(): Promise<ITag[]>;
}
