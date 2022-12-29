import { IFindTagsInTask } from '@modules/tasks/domain/interfaces/IFindTagsInTask';
import { ITaskTag } from '@modules/task_tag/domain/interfaces/ITaskTag';
import { IUser } from '@modules/users/domain/interfaces/IUser';
import { ISaveTask } from './ICreateTask';
import { IInsertTag } from './IInsertTag';
import { ITasks } from './ITasks';

export interface ITaskRepository {
  findById(id: string, user: IUser): Promise<ITasks | undefined>;
  findByTag(tag_id: string, user: IUser): Promise<ITasks | undefined>;
  priorityChange(task: ITasks): Promise<ITasks | undefined>;
  findAllTagInTask({ task, user, tags }: IFindTagsInTask): Promise<ITaskTag[]>;
  removeTags(tags: ITaskTag[]): Promise<void>;
  deleteById(task: ITasks): Promise<void>;
  completed(task: ITasks): Promise<void>;
  findAll(user: IUser): Promise<ITasks[]>;
  save(task: ISaveTask): Promise<ITasks>;
  insertTag(update: IInsertTag): Promise<void>;
}
