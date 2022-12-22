import User from '@modules/users/infra/model/UserModel';
import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import { IUser, IUserSave } from '@modules/users/domain/interfaces/IUser';
import { hash } from 'bcrypt';

export default class UserRepositoryMemory implements IUserRepository {
  private users: User[] = [
    {
      email: 'vinny@vinny.com',
      id: '2',
      name: 'vinny',
      password: '123456',
      tasks: [],
    },
  ];

  async findById(id: string): Promise<IUser | undefined> {
    const user = this.users.find(user => {
      user.id = id;
    });

    return user;
  }
  async findByEmail(email: string): Promise<IUser | undefined> {
    const user = this.users.find(user => (user.email = email));

    return user;
  }
  async save(user: IUserSave): Promise<IUser> {
    const User = {
      id: '2fb6184d-06c7-4902-8fdb-5a4b4a5622ee',
      ...user,
      password: await hash(user.password, 8),
      tasks: [],
    };

    this.users.push(User);

    return User;
  }
  async remove(user: User): Promise<void> {
    const index = this.users.indexOf(user);

    this.users.splice(index, 1);
  }
}
