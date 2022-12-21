import User from '../model/UserModel';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import { IUser, IUserSave } from '@modules/users/domain/interfaces/IUser';

@EntityRepository(User)
export default class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: string): Promise<IUser | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }
  async findByEmail(email: string): Promise<IUser | undefined> {
    const user = await this.repository.findOne({
      where: [
        {
          email,
        },
      ],
    });

    return user;
  }
  async save(user: IUserSave): Promise<IUser> {
    const saveUser = this.repository.create(user);

    return await this.repository.save(saveUser);
  }
  async remove(user: User): Promise<void> {
    await this.repository.remove(user);
  }
}
