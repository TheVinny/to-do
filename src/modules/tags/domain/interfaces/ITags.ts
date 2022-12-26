import Tasks from '@modules/tasks/infra/model/TasksModel';

export interface ITag {
  title: string;
  id: string;
  color: string;
  task: Tasks;
}
