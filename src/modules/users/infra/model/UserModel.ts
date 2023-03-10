import Tasks from '@modules/tasks/infra/model/TasksModel';
import { IUser } from '@modules/users/domain/interfaces/IUser';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import Tag from '@modules/tags/infra/model/TagModel';
import TasksTag from '@modules/task_tag/infra/model/TaskTag';

@Entity('users')
class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => TasksTag, taskstag => taskstag.user, {
    cascade: true,
  })
  tasktag: TasksTag[];

  @OneToMany(() => Tasks, task => task.user)
  tasks: Tasks[];

  @OneToMany(() => Tasks, task => task.user)
  tags: Tag[];
}

export default User;
