import { ITag } from '@modules/tags/domain/interfaces/ITags';
import Tasks from '@modules/tasks/infra/model/TasksModel';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class Tag implements ITag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  color: string;

  @Column()
  description: string;

  @ManyToOne(() => Tasks, task => task.tags)
  @JoinColumn({ name: 'task_id' })
  task: Tasks;

  @Column()
  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tag;
