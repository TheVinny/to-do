import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../domain/interfaces/IUser';
import { IUserRepository } from '../domain/interfaces/IUserRepository';

@injectable()
class GetByIdUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<IUser> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new AppError('User not found', 404);

    return user;
  }
}

export default GetByIdUserService;
