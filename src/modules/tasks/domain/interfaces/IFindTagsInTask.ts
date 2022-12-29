import { ITag } from '@modules/tags/domain/interfaces/ITags';
import { ITasks } from './ITasks';

export interface IFindTagsInTask {
  user: string;
  task: string;
  tags: ITag[];
}
