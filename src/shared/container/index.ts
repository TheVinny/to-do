import { container } from 'tsyringe';

import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import UserRepository from '@modules/users/infra/repository/UserRepository';
import { ITagRepository } from '@modules/tags/domain/interfaces/ITagRepository';
import TagRepository from '@modules/tags/infra/repository/TagRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITagRepository>('TagRepository', TagRepository);
