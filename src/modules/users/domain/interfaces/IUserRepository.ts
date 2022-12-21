import { IUser, IUserSave } from './IUser';

export interface IUserRepository {
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  save(user: IUserSave): Promise<IUser>;
  remove(user: IUser): Promise<void>;
}
