import { IUser } from './IUser';

export interface IUserRepository {
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  save(user: IUser): Promise<void>;
  remove(user: IUser): Promise<void>;
}
