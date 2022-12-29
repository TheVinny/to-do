import { ITag } from '@modules/tags/domain/interfaces/ITags';

export interface IFindTagsInTask {
  user: string;
  task: string;
  tags: ITag[];
}
