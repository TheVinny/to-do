import Tasks from '@modules/tasks/infra/model/TasksModel';

export interface IRemoveTagTask {
  id: string;
  task: Tasks;
  tag: string[];
}
