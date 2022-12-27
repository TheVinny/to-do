import { container } from 'tsyringe';

import { IUserRepository } from '@modules/users/domain/interfaces/IUserRepository';
import UserRepository from '@modules/users/infra/repository/UserRepository';
import { ITagRepository } from '@modules/tags/domain/interfaces/ITagRepository';
import TagRepository from '@modules/tags/infra/repository/TagRepository';
import TaskRepository from '@modules/tasks/infra/repository/TaskRepository';
import { ITaskRepository } from '@modules/tasks/domain/interfaces/ITaskRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITagRepository>('TagRepository', TagRepository);
container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);
