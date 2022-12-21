import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateUser } from '../domain/interfaces/ICreateUser';
import { IUser } from '../domain/interfaces/IUser';
import { IUserRepository } from '../domain/interfaces/IUserRepository';
import bcrypt from 'bcrypt';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    email,
    name,
    password,
    repeatPassword,
  }: ICreateUser): Promise<IUser> {
    const hasEmail = await this.userRepository.findByEmail(email);

    console.log(hasEmail);

    if (hasEmail) throw new AppError('Email has been used', 409);

    const hashPassword = await bcrypt.hash(password, 8);

    const user = await this.userRepository.save({
      email,
      name,
      password,
    });

    return user;
  }
}

export default CreateUserService;
