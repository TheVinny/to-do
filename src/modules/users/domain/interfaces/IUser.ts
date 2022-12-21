import { ITasks } from '@modules/tasks/domain/interfaces/ITasks';

export interface IUser {
  name: string;
  email: string;
  password: string;
  tasks: ITasks[];
}
