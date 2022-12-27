import { ISaveTask } from './ICreateTask';
import { ITasks } from './ITasks';

export interface ITaskRepository {
  findById(id: string): Promise<ITasks | undefined>;
  findByTag(tag_id: string): Promise<ITasks | undefined>;
  priorityChange(task: ITasks): Promise<ITasks | undefined>;
  deleteById(task: ITasks): Promise<void>;
  completed(task: ITasks): Promise<void>;
  findAll(): Promise<ITasks[]>;
  save(task: ISaveTask): Promise<ITasks>;
}
