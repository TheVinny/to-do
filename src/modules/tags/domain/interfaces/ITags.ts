import Tasks from '@modules/tasks/infra/model/TasksModel';
import User from '@modules/users/infra/model/UserModel';

export interface ITag {
  title: string;
  id: string;
  color: string;
  task: Tasks;
  user: User;
}
