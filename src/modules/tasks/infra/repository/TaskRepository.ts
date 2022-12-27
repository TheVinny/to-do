import Tasks from '../model/TasksModel';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { ITaskRepository } from '@modules/tasks/domain/interfaces/ITaskRepository';
import { ITasks } from '@modules/tasks/domain/interfaces/ITasks';
import { ISaveTask } from '@modules/tasks/domain/interfaces/ICreateTask';

@EntityRepository(Tasks)
export default class TasksRepository implements ITaskRepository {
  private repository: Repository<Tasks>;

  constructor() {
    this.repository = getRepository(Tasks);
  }
  async findById(id: string): Promise<ITasks | undefined> {
    const task = await this.repository.findOne({
      where: {
        id,
      },
    });

    return task;
  }
  async findByTag(tag_id: string): Promise<ITasks | undefined> {
    const task = await this.repository.findOne({
      where: {
        tags: tag_id,
      },
    });

    return task;
  }
  async priorityChange(task: ITasks): Promise<ITasks | undefined> {
    if (task.priority === 2) {
      task.priority = 0;
      await this.repository.save(task);
      return task;
    }

    task.priority += task.priority;
    return task;
  }
  async deleteById(task: ITasks): Promise<void> {
    await this.repository.delete(task);
  }

  async completed(task: ITasks): Promise<void> {
    task.completed = !task.completed;
    await this.repository.save(task);
  }

  async save(task: ISaveTask): Promise<ITasks> {
    console.log(task);
    const taskCreate = this.repository.create({
      ...task,
    });

    await this.repository.save(taskCreate);

    return taskCreate;
  }

  async findAll(): Promise<ITasks[]> {
    const tasks = await this.repository.find();
    return tasks;
  }
}
