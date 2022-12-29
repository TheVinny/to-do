import { ITag } from '@modules/tags/domain/interfaces/ITags';
import Tasks from '@modules/tasks/infra/model/TasksModel';
import TasksTag from '@modules/task_tag/infra/model/TaskTag';
import User from '@modules/users/infra/model/UserModel';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tags')
class Tag implements ITag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  color: string;

  @OneToMany(() => TasksTag, taskstag => taskstag.tag, {
    cascade: true,
  })
  tasktag: TasksTag[];

  @ManyToOne(() => User, user => user.tags)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Tasks, task => task.tags)
  task: Tasks;
}

export default Tag;
