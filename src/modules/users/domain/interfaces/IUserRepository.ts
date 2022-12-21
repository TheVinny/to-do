import { IUser } from './IUser';

export interface IUserRepository {
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  save(user: IUser): Promise<void>;
  remove(user: IUser): Promise<void>;
}
