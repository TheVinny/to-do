import { IUser } from '@modules/users/domain/interfaces/IUser';

export interface ICreateTask {
  title: string;
  description: string;
  user_id: string;
}

export interface ISaveTask {
  title: string;
  description: string;
  user: IUser;
}
