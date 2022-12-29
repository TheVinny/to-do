import { ITag } from '@modules/tags/domain/interfaces/ITags';
import { IUser } from '@modules/users/domain/interfaces/IUser';
import { ITasks } from './ITasks';

export interface IInsertTag {
  task: ITasks;
  tags: ITag[];
  user: IUser;
}

export interface ITagInsert {
  task_id: string;
  tags: ITag[];
  id: string;
}
