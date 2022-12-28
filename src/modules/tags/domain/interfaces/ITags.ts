import Tasks from '@modules/tasks/infra/model/TasksModel';
import TasksTag from '@modules/task_tag/infra/model/TaskTag';
import User from '@modules/users/infra/model/UserModel';

export interface ITag {
  title: string;
  id: string;
  color: string;
  task: Tasks;
  user: User;
  tasktag: TasksTag[];
}
