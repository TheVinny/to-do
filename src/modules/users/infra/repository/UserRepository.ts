import User from '../model/UserModel';
import { EntityRepository } from 'typeorm';
import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import { IUser } from '@modules/users/domain/interfaces/IUser';

@EntityRepository(User)
export default class UserRepository implements IUserRepository {
  findById(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  save(user: IUser): Promise<void> {
    throw new Error('Method not implemented.');
  }
  remove(user: IUser): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
