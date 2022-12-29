import { ITag } from '@modules/tags/domain/interfaces/ITags';
import { ITasks } from '@modules/tasks/domain/interfaces/ITasks';
import { IUser } from '@modules/users/domain/interfaces/IUser';

export interface ITaskTag {
  id: string;
  task: ITasks;
  tag: ITag;
  user: IUser;
}

export interface ITaskTagResponse {
  id: string;
  task: ITasks;
  tag: ITag[];
}
