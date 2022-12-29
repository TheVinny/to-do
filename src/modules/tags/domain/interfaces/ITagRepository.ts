import Tag from '@modules/tags/infra/model/TagModel';
import { ISaveTag } from './ICreateTag';
import {
  IFindTagByColor,
  IFindTagById,
  IFindTagByTitle,
  IFindTags,
} from './IFindTags';
import { ITag } from './ITags';

export interface ITagRepository {
  findById(id: IFindTagById): Promise<ITag | undefined>;
  findByTitle(title: IFindTagByTitle): Promise<ITag | undefined>;
  findByColor(color: IFindTagByColor): Promise<ITag | undefined>;
  deleteById(tag: Tag): Promise<void>;
  save(tag: ISaveTag): Promise<ITag>;
  findAll(user_id: string): Promise<ITag[]>;
  findAllById(tags: IFindTags[]): Promise<ITag[]>;
}
