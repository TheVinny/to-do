import Tasks from '../model/TasksModel';
import { EntityRepository, getRepository, In, Repository } from 'typeorm';
import { ITaskRepository } from '@modules/tasks/domain/interfaces/ITaskRepository';
import { ITasks } from '@modules/tasks/domain/interfaces/ITasks';
import { ISaveTask } from '@modules/tasks/domain/interfaces/ICreateTask';
import { IInsertTag } from '@modules/tasks/domain/interfaces/IInsertTag';
import TasksTag from '@modules/task_tag/infra/model/TaskTag';
import { ITaskTag } from '@modules/task_tag/domain/interfaces/ITaskTag';
import { IUser } from '@modules/users/domain/interfaces/IUser';
import { IFindTagsInTask } from '@modules/tasks/domain/interfaces/IFindTagsInTask';

@EntityRepository(Tasks)
export default class TasksRepository implements ITaskRepository {
  private repository: Repository<Tasks>;
  private taskTagRepository: Repository<TasksTag>;
  constructor() {
    this.repository = getRepository(Tasks);
    this.taskTagRepository = getRepository(TasksTag);
  }
  async findById(id: string, user: IUser): Promise<ITasks | undefined> {
    const task = await this.repository.findOne({
      where: {
        id,
        user,
      },
    });

    return task;
  }
  async findByTag(tag_id: string, user: IUser): Promise<ITasks | undefined> {
    const task = await this.repository.findOne({
      where: {
        tags: tag_id,
        user,
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
    const taskCreate = this.repository.create({
      ...task,
    });

    await this.repository.save(taskCreate);

    return taskCreate;
  }

  async insertTag({ tags, task, user }: IInsertTag): Promise<void> {
    const tasktags: ITaskTag[] = [];

    this.taskTagRepository.create();

    tags.map(tag => {
      const tasktag = this.taskTagRepository.create({
        tag,
        task,
        user,
      });

      tasktags.push(tasktag);
    });

    await this.taskTagRepository.insert(tasktags);
  }

  async findAllTagInTask({
    tags,
    task,
    user,
  }: IFindTagsInTask): Promise<ITaskTag[]> {
    const tagsId = tags.map(tag => tag.id);

    const findTags = await this.taskTagRepository.find({
      where: {
        tag: In(tagsId),
        task,
        user,
      },
      loadEagerRelations: true,
    });

    return findTags;
  }

  async removeTags(tags: TasksTag[]): Promise<void> {
    await this.taskTagRepository.remove(tags);
  }

  async findAll(user: IUser): Promise<ITasks[]> {
    const tasks = await this.repository.find({
      where: {
        user,
      },
      relations: ['tasktag'],
    });

    return tasks;
  }
}
