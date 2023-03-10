import { ITag } from '@modules/tags/domain/interfaces/ITags';
import Tag from '@modules/tags/infra/model/TagModel';
import { ITasks } from '@modules/tasks/domain/interfaces/ITasks';
import TasksTag from '@modules/task_tag/infra/model/TaskTag';
import User from '@modules/users/infra/model/UserModel';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tasks')
class Tasks implements ITasks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Tag, tag => tag.task)
  tags: ITag[];

  @Column()
  priority: number;

  @Column()
  completed: boolean;

  @OneToMany(() => TasksTag, taskstag => taskstag.task, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  tasktag: TasksTag[];

  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  @CreateDateColumn()
  created_at: Date;
}

export default Tasks;
