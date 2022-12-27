import { ITag } from '@modules/tags/domain/interfaces/ITags';
import { ITasks } from '@modules/tasks/domain/interfaces/ITasks';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  tasks: ITasks[];
  tags: ITag[];
}

export interface IUserSave {
  name: string;
  email: string;
  password: string;
}
