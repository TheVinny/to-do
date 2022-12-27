import { IUser } from '@modules/users/domain/interfaces/IUser';

export interface ICreateTag {
  title: string;
  color: string;
  user_id: string;
}

export interface ISaveTag {
  title: string;
  color: string;
  user: IUser;
}
