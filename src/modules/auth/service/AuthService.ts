import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { compare } from 'bcrypt';
import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import path from 'path';
import { readFileSync } from 'fs';
import JWT from 'jsonwebtoken';
import { ICreateAuth } from '../domain/interfaces/ICreateAuth';
import { IAuth } from '../domain/interfaces/IAuth';

@injectable()
class AuthService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: ICreateAuth): Promise<IAuth> {
    const hasUser = await this.userRepository.findByEmail(email);

    if (!hasUser) throw new AppError('User credencials not valid', 401);

    const passwordMatchs = await compare(password, hasUser.password);

    if (!passwordMatchs) throw new AppError('User credencials not valid', 401);

    const absPath = path.resolve('./', 'jwt.secret.key').toString();

    const secret = readFileSync(absPath, 'utf-8').split('=')[1];

    const token = JWT.sign({ id: hasUser.id }, secret, { expiresIn: '1d' });

    return { ...hasUser, token };
  }
}

export default AuthService;
