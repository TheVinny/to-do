import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUpdateUser } from '../domain/interfaces/IUpdateUser';
import { IUser } from '../domain/interfaces/IUser';
import { IUserRepository } from '../domain/interfaces/IUserRepository';
import { compare, hash } from 'bcrypt';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    email,
    name,
    password,
    repeatPassword,
    id,
  }: IUpdateUser): Promise<IUser> {
    const userExists = await this.userRepository.findById(id);

    const emailExists = await this.userRepository.findByEmail(email);

    if (!userExists) throw new AppError('User id not found', 404);

    if (emailExists && emailExists.email !== email) {
      throw new AppError('already one user with this username.');
    }

    if (password && !repeatPassword) {
      throw new AppError('Old password is required.');
    }

    if (password && repeatPassword) {
      const checkOldPassword = await compare(
        repeatPassword,
        userExists.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      userExists.password = await hash(password, 8);
    }

    const hashpass = await hash(password, 8);

    userExists.email = email || userExists.email;
    userExists.password = hashpass || userExists.password;
    userExists.name = name || userExists.name;

    await this.userRepository.save(userExists);

    return userExists;
  }
}

export default UpdateUserService;
