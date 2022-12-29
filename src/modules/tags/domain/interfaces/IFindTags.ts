import { IUser } from '@modules/users/domain/interfaces/IUser';

export interface IFindTags {
  id: string;
}

export interface IFindTagByColor {
  user: IUser;
  color: string;
}

export interface IFindTagByTitle {
  user: IUser;
  title: string;
}

export interface IFindTagById {
  user: IUser;
  id: string;
}
