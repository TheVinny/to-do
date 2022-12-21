import Tasks from '@modules/tasks/infra/model/TasksModel';
import { IUser } from '@modules/users/domain/interfaces/IUser';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Tasks, task => task.user)
  tasks: Tasks[];
}

export default User;
