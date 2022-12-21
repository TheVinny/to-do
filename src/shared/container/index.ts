import { container } from 'tsyringe';

import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import UserRepository from '@modules/users/infra/repository/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
