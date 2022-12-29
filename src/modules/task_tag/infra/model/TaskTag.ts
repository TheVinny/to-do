import Tag from '@modules/tags/infra/model/TagModel';
import Tasks from '@modules/tasks/infra/model/TasksModel';
import { ITaskTag } from '@modules/task_tag/domain/interfaces/ITaskTag';
import User from '@modules/users/infra/model/UserModel';
import { Exclude } from 'class-transformer';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task_tag')
class TasksTag implements ITaskTag {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @ManyToOne(() => Tasks, task => task.tasktag)
  @JoinColumn({ name: 'task_id' })
  task: Tasks;

  @ManyToOne(() => Tag, tag => tag.tasktag, { eager: true })
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;

  @ManyToOne(() => User, user => user.tasktag)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default TasksTag;
