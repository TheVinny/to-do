import Tasks from '@modules/tasks/infra/model/TasksModel';
import { IUser } from '@modules/users/domain/interfaces/IUser';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

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

  @OneToMany(() => Tasks, task => task.user)
  tasks: Tasks[];
}

export default User;
